import { useEffect } from "react";
import { useLocation } from "react-router";
import { useSession } from "@/hooks/useSession";

export function StudentActivityTracker() {
  const session = useSession();
  const location = useLocation();
  const path = location.pathname + location.hash;

  useEffect(() => {
    if (session?.role !== "student") return;
    let cancelled = false;
    let visitId: number | undefined;
    let lastVisibleAt = Date.now();
    const send = async () => {
      if (document.visibilityState !== "visible") return;
      if (Date.now() - lastVisibleAt > 90_000) visitId = undefined;
      lastVisibleAt = Date.now();
      try {
        const response = await fetch("/api/student-report", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            kind: "visit", path,
            title: document.querySelector("main h1")?.textContent?.trim() || document.title,
            visitId,
          }),
        });
        if (response.ok && !cancelled) visitId = (await response.json()).visitId;
      } catch { /* Retry at the next heartbeat. */ }
    };
    void send();
    const interval = window.setInterval(() => void send(), 30_000);
    const onVisibility = () => { if (document.visibilityState === "visible") void send(); };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [session?.role, path]);
  return null;
}
