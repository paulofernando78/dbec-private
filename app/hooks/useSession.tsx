import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type Session = {
  username: string;
  role: "teacher" | "student";
  studentId?: string;
  dashboardPath: string;
  displayName: string;
  schedule: string | null;
  time: string | null;
  plan: "free" | "plus" | null;
};

const SessionContext = createContext<Session | null | undefined>(undefined);

const SessionExpiryContext = createContext<() => boolean>(() => false);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>();

  const lastExpiration = useRef(0);

  useEffect(() => {
    const controller = new AbortController();
    let checking = false;
    let retry: number | undefined;
    let expiration: number | undefined;
    let expiresAt = 0;
    let renewing = false;
    let lastRenewal = 0;

    function scheduleExpiration(nextExpiration: number) {
      expiresAt = nextExpiration;
      lastExpiration.current = nextExpiration;
      window.clearTimeout(expiration);
      expiration = window.setTimeout(refresh, Math.max(0, expiresAt - Date.now()) + 100);
    }

    async function refresh() {
      if (checking || renewing) return;
      window.clearTimeout(retry);
      checking = true;
      try {
        const response = await fetch("/api/session", {
          cache: "no-store",
          signal: controller.signal,
        });
        if (controller.signal.aborted) return;
        if (response.status === 401) {
          expiresAt = 0;
          window.clearTimeout(expiration);
          setSession(null);
        } else if (response.ok) {
          const current = await response.json() as Session & { expiresAt: number };
          if (!controller.signal.aborted) {
            scheduleExpiration(current.expiresAt);
            setSession(current);
          }
        } else {
          throw new Error("Session check failed");
        }
      } catch {
        if (!controller.signal.aborted && expiresAt && Date.now() >= expiresAt) {
          setSession(null);
        }
        if (!controller.signal.aborted) retry = window.setTimeout(refresh, 5_000);
      } finally {
        checking = false;
      }
    }

    async function renewOnActivity() {
      if (!expiresAt || checking || renewing || Date.now() - lastRenewal < 15_000) return;
      renewing = true;
      try {
        const response = await fetch("/api/session", {
          method: "POST",
          signal: controller.signal,
        });
        if (response.ok) {
          const renewed = await response.json() as { expiresAt: number };
          if (!controller.signal.aborted) {
            lastRenewal = Date.now();
            scheduleExpiration(renewed.expiresAt);
          }
        } else if (response.status === 401 && !controller.signal.aborted) {
          expiresAt = 0;
          window.clearTimeout(expiration);
          setSession(null);
        }
      } catch {
        // The next interaction can retry while the session is still valid.
      } finally {
        renewing = false;
        if (!controller.signal.aborted && expiresAt && Date.now() >= expiresAt) {
          void refresh();
        }
      }
    }

    function onVisibilityChange() {
      if (document.visibilityState === "visible") void refresh();
    }

    void refresh();
    window.addEventListener("pageshow", refresh);
    window.addEventListener("focus", refresh);
    window.addEventListener("online", refresh);
    document.addEventListener("visibilitychange", onVisibilityChange);
    const activityEvents = ["pointerdown", "keydown", "scroll", "play"] as const;
    for (const event of activityEvents) {
      document.addEventListener(event, renewOnActivity, { capture: true, passive: true });
    }
    const playbackCheck = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      const speech = window.speechSynthesis;
      const playing = Array.from(document.querySelectorAll<HTMLMediaElement>("audio, video"))
        .some((media) => !media.paused && !media.ended && media.readyState >= 3);
      if (playing || (speech?.speaking && !speech.paused)) void renewOnActivity();
    }, 15_000);
    return () => {
      controller.abort();
      window.clearTimeout(retry);
      window.clearTimeout(expiration);
      window.clearInterval(playbackCheck);
      for (const event of activityEvents) {
        document.removeEventListener(event, renewOnActivity, true);
      }
      window.removeEventListener("pageshow", refresh);
      window.removeEventListener("focus", refresh);
      window.removeEventListener("online", refresh);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <SessionExpiryContext.Provider value={() => {
      const deadline = lastExpiration.current;
      return deadline > 0 && (session === null || Date.now() >= deadline);
    }}>
      <SessionContext.Provider value={session}>{children}</SessionContext.Provider>
    </SessionExpiryContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}

export function useSessionExpired() {
  return useContext(SessionExpiryContext);
}
