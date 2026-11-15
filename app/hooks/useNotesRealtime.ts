import { useCallback, useEffect, useRef, useState } from "react";

export type NoteType = "teacher" | "student";

type NoteUpdate = {
  type: "note:update";
  noteType: NoteType;
  content: string;
  updatedAt?: number;
};

type WriterUpdate = {
  type: "writer:update" | "writer:clear";
  name?: string;
  role?: NoteType;
};

type ConnectionState =
  | "connecting"
  | "connected"
  | "polling"
  | "disconnected";

export type CalendarEntry = {
  lessonDate: string;
  status: string;
  replacementDate?: string | null;
};

type NotesResponse = {
  calendar?: CalendarEntry[];
  notes?: Partial<Record<NoteType, string>>;
};

export function useNotesRealtime(
  studentId: string | undefined,
  role: NoteType | undefined,
  onRemoteUpdate: (noteType: NoteType, content: string) => void,
  onWriterUpdate?: (writer: { name: string; role: NoteType } | null) => void,
  onCalendarUpdate?: (entries: CalendarEntry[]) => void,
) {
  const socketRef = useRef<WebSocket | null>(null);
  const callbackRef = useRef(onRemoteUpdate);
  const calendarCallbackRef = useRef(onCalendarUpdate);
  useEffect(() => {
    calendarCallbackRef.current = onCalendarUpdate;
  }, [onCalendarUpdate]);
  const saveTimersRef = useRef<Record<string, number>>({});
  const saveQueuesRef = useRef<Record<string, Promise<void>>>({});
  const pendingNotesRef = useRef<Record<string, string>>({});
  const lastReceivedRef = useRef<Record<string, string>>({});
  const writerTimerRef = useRef<number | undefined>(undefined);
  const [connectionState, setConnectionState] =
    useState<ConnectionState>("disconnected");

  useEffect(() => {
    callbackRef.current = onRemoteUpdate;
  }, [onRemoteUpdate]);

  useEffect(() => {
    if (!studentId || !role) {
      setConnectionState("disconnected");
      return;
    }

    let disposed = false;
    let reconnectTimer: number | undefined;
    let pollingTimer: number | undefined;
    let calendarRequest = 0;
    let appliedCalendarRequest = 0;

    const stopPolling = () => {
      if (pollingTimer) window.clearInterval(pollingTimer);
      pollingTimer = undefined;
    };

    const pollNotes = async (calendarOnly = false) => {
      const request = ++calendarRequest;
      try {
        const response = await fetch(
          `/api/dashboard?studentId=${encodeURIComponent(studentId)}`,
          { headers: { Accept: "application/json" } },
        );
        if (!response.ok) return;

        const result = (await response.json()) as NotesResponse;
        if (disposed) return;
        if (request > appliedCalendarRequest && Array.isArray(result.calendar)) {
          appliedCalendarRequest = request;
          calendarCallbackRef.current?.(result.calendar);
        }
        if (calendarOnly) return;
        for (const noteType of ["teacher", "student"] as const) {
          const noteKey = `${studentId}:${noteType}`;
          const content = result.notes?.[noteType];
          if (
            typeof content === "string" &&
            pendingNotesRef.current[noteKey] === undefined &&
            lastReceivedRef.current[noteKey] !== content
          ) {
            lastReceivedRef.current[noteKey] = content;
            callbackRef.current(noteType, content);
          }
        }
      } catch {
        // The next poll or WebSocket reconnect will retry the sync.
      }
    };

    const startPolling = (interval = 1_500) => {
      if (disposed || pollingTimer) return;
      void pollNotes();
      pollingTimer = window.setInterval(() => void pollNotes(), interval);
    };

    const connect = () => {
      if (disposed) return;

      if (!pollingTimer) setConnectionState("connecting");
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const socket = new WebSocket(
        `${protocol}//${window.location.host}/api/notes-live?studentId=${encodeURIComponent(studentId)}`,
      );
      socketRef.current = socket;

      socket.addEventListener("open", () => {
        if (!disposed) {
          stopPolling();
          // WebSocket updates are immediate. This slower reconciliation catches
          // a message lost during a proxy/network transition without requiring
          // the user to refresh the page.
          startPolling(10_000);
          setConnectionState("connected");
        }
      });

      socket.addEventListener("message", (event) => {
        try {
          const update = JSON.parse(event.data) as NoteUpdate | WriterUpdate | { type: "calendar:changed" };
          if (update.type === "calendar:changed") {
            if (!disposed && calendarCallbackRef.current) void pollNotes(true);
            return;
          }
          if (update.type === "writer:update" && update.name && update.role) {
            if (writerTimerRef.current) window.clearTimeout(writerTimerRef.current);
            onWriterUpdate?.({ name: update.name, role: update.role });
            writerTimerRef.current = window.setTimeout(() => onWriterUpdate?.(null), 4_000);
            return;
          }
          if (update.type === "writer:clear") {
            if (writerTimerRef.current) window.clearTimeout(writerTimerRef.current);
            onWriterUpdate?.(null);
            return;
          }
          if (
            update.type === "note:update" &&
            (update.noteType === "teacher" || update.noteType === "student") &&
            typeof update.content === "string"
          ) {
            const noteKey = `${studentId}:${update.noteType}`;

            // Keep an unsaved local document intact. Once its save finishes,
            // polling reconciles both clients with the persisted D1 value.
            if (pendingNotesRef.current[noteKey] !== undefined) {
              return;
            }
            lastReceivedRef.current[noteKey] = update.content;
            callbackRef.current(update.noteType, update.content);
          }
        } catch {
          // Ignore malformed real-time messages.
        }
      });

      socket.addEventListener("close", () => {
        if (writerTimerRef.current) window.clearTimeout(writerTimerRef.current);
        onWriterUpdate?.(null);
        if (socketRef.current === socket) socketRef.current = null;
        if (disposed) return;

        stopPolling();
        setConnectionState("polling");
        startPolling();
        reconnectTimer = window.setTimeout(connect, 2000);
      });

      socket.addEventListener("error", () => socket.close());
    };

    if (calendarCallbackRef.current) startPolling();
    connect();

    return () => {
      disposed = true;
      if (reconnectTimer) window.clearTimeout(reconnectTimer);
      stopPolling();
      socketRef.current?.close(1000, "Page changed");
      socketRef.current = null;
      if (writerTimerRef.current) window.clearTimeout(writerTimerRef.current);
    };
  }, [role, studentId]);

  const sendNote = useCallback(
    (noteType: NoteType, content: string, shared = false) => {
      const canEditNote =
        role === "teacher" || (role === "student" && noteType === "student");

      if (!canEditNote || !studentId) return;

      const noteKey = `${studentId}:${noteType}`;
      pendingNotesRef.current[noteKey] = content;

      if (socketRef.current?.readyState === WebSocket.OPEN) {
        socketRef.current.send(JSON.stringify({ type: "writer:update" }));
        socketRef.current.send(
          JSON.stringify({
            type: "note:update",
            noteType,
            content,
            updatedAt: Date.now(),
          } satisfies NoteUpdate),
        );
      }

      const currentTimer = saveTimersRef.current[noteKey];
      if (currentTimer) window.clearTimeout(currentTimer);

      // Let this short debounce finish even if the dashboard unmounts while
      // switching from the teacher view to the student's view.
      const saveTimer = window.setTimeout(() => {
        const previousSave = saveQueuesRef.current[noteKey] ?? Promise.resolve();
        const currentSave = previousSave
          .catch(() => undefined)
          .then(async () => {
            const retryDelays = [0, 750, 1_500, 3_000, 6_000];

            for (const delay of retryDelays) {
              if (pendingNotesRef.current[noteKey] !== content) return;
              if (delay) {
                await new Promise((resolve) => window.setTimeout(resolve, delay));
              }
              if (pendingNotesRef.current[noteKey] !== content) return;

              try {
                const response = await fetch("/api/notes", {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ studentId, noteType, content, shared }),
                });

                if (response.ok) {
                  if (pendingNotesRef.current[noteKey] === content) {
                    lastReceivedRef.current[noteKey] = content;
                    delete pendingNotesRef.current[noteKey];
                  }
                  return;
                }

                // Authentication and validation errors will not improve by
                // retrying the same request.
                if (response.status < 500 && response.status !== 429) {
                  console.error(`Note save failed with HTTP ${response.status}.`);
                  return;
                }
              } catch {
                // Retry transient network failures below.
              }
            }

            console.error("Note save failed after multiple attempts.");
          });
        saveQueuesRef.current[noteKey] = currentSave;

        void currentSave
          .catch(() => {
            // A later queued save can retry after transient network failures.
          })
          .finally(() => {
            if (saveQueuesRef.current[noteKey] === currentSave) {
              delete saveQueuesRef.current[noteKey];
            }
            if (saveTimersRef.current[noteKey] === saveTimer) {
              delete saveTimersRef.current[noteKey];
            }
          });
      }, 400);
      saveTimersRef.current[noteKey] = saveTimer;
    },
    [role, studentId],
  );

  return { connectionState, sendNote };
}
