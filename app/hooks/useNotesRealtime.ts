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

type NotesResponse = {
  notes?: Partial<Record<NoteType, string>>;
};

export function useNotesRealtime(
  studentId: string | undefined,
  role: NoteType | undefined,
  onRemoteUpdate: (noteType: NoteType, content: string) => void,
  onWriterUpdate?: (writer: { name: string; role: NoteType } | null) => void,
) {
  const socketRef = useRef<WebSocket | null>(null);
  const callbackRef = useRef(onRemoteUpdate);
  const saveTimersRef = useRef<Partial<Record<NoteType, number>>>({});
  const saveQueuesRef = useRef<Partial<Record<NoteType, Promise<void>>>>({});
  const pendingNotesRef = useRef<Partial<Record<NoteType, string>>>({});
  const lastReceivedRef = useRef<Partial<Record<NoteType, string>>>({});
  const lastLocalEditRef = useRef<Partial<Record<NoteType, number>>>({});
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

    const stopPolling = () => {
      if (pollingTimer) window.clearInterval(pollingTimer);
      pollingTimer = undefined;
    };

    const pollNotes = async () => {
      try {
        const response = await fetch(
          `/api/dashboard?studentId=${encodeURIComponent(studentId)}`,
          { headers: { Accept: "application/json" } },
        );
        if (!response.ok) return;

        const result = (await response.json()) as NotesResponse;
        for (const noteType of ["teacher", "student"] as const) {
          const content = result.notes?.[noteType];
          const wasRecentlyEdited =
            Date.now() - (lastLocalEditRef.current[noteType] ?? 0) < 2_500;
          if (
            typeof content === "string" &&
            !wasRecentlyEdited &&
            pendingNotesRef.current[noteType] === undefined &&
            lastReceivedRef.current[noteType] !== content
          ) {
            lastReceivedRef.current[noteType] = content;
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
          const update = JSON.parse(event.data) as NoteUpdate | WriterUpdate;
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
            const wasRecentlyEdited =
              Date.now() - (lastLocalEditRef.current[update.noteType] ?? 0) <
              10_000;
            if (
              wasRecentlyEdited ||
              pendingNotesRef.current[update.noteType] !== undefined
            ) {
              return;
            }

            lastReceivedRef.current[update.noteType] = update.content;
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

      lastLocalEditRef.current[noteType] = Date.now();
      pendingNotesRef.current[noteType] = content;

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

      const currentTimer = saveTimersRef.current[noteType];
      if (currentTimer) window.clearTimeout(currentTimer);

      // Let this short debounce finish even if the dashboard unmounts while
      // switching from the teacher view to the student's view.
      saveTimersRef.current[noteType] = window.setTimeout(() => {
        const previousSave = saveQueuesRef.current[noteType] ?? Promise.resolve();
        const currentSave = previousSave
          .catch(() => undefined)
          .then(async () => {
            if (pendingNotesRef.current[noteType] !== content) return;

            const response = await fetch("/api/notes", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ studentId, noteType, content, shared }),
            });

            if (!response.ok) return;

            if (pendingNotesRef.current[noteType] === content) {
              lastReceivedRef.current[noteType] = content;
              delete pendingNotesRef.current[noteType];
            }
          });
        saveQueuesRef.current[noteType] = currentSave;

        void currentSave
          .catch(() => {
            // A later queued save can retry after transient network failures.
          })
          .finally(() => {
            if (saveQueuesRef.current[noteType] === currentSave) {
              delete saveQueuesRef.current[noteType];
            }
            if (saveTimersRef.current[noteType]) {
              delete saveTimersRef.current[noteType];
            }
          });
      }, 400);
    },
    [role, studentId],
  );

  return { connectionState, sendNote };
}
