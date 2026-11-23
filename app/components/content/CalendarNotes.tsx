import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/Card";

export function CalendarNotes({ studentId, readOnly }: { studentId: string; readOnly: boolean }) {
  const [content, setContent] = useState("");
  const [savedContent, setSavedContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const savingRef = useRef(false);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setLoaded(false);
    setError("");
    fetch(`/api/calendar-notes?studentId=${encodeURIComponent(studentId)}`, { signal: controller.signal, cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Loading error");
        return response.json() as Promise<{ content: string }>;
      })
      .then(({ content: text }) => {
        if (controller.signal.aborted) return;
        setContent(text);
        setSavedContent(text);
        setLoaded(true);
      })
      .catch(() => {
        if (!controller.signal.aborted) setError("Unable to load notes.");
      })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [studentId, reload]);

  const save = useCallback(async () => {
    if (savingRef.current || readOnly || !loaded || content === savedContent) return;
    savingRef.current = true;
    setSaving(true);
    setError("");
    const text = content;
    try {
      const response = await fetch("/api/calendar-notes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, content: text }),
      });
      if (!response.ok) throw new Error("Save failed");
      setSavedContent(text);
    } catch {
      setError("Unable to save notes. Your text has been kept.");
    } finally {
      savingRef.current = false;
      setSaving(false);
    }
  }, [content, loaded, readOnly, savedContent, studentId]);

  useEffect(() => {
    if (!loaded || readOnly || saving || error || content === savedContent) return;
    const timeoutId = window.setTimeout(() => void save(), 700);
    return () => window.clearTimeout(timeoutId);
  }, [content, error, loaded, readOnly, savedContent, save, saving]);

  return (
    <>
      <span className="mb-2 block font-bold">Important Notes</span>
      <Card className="mb-4 bg-(--background)">
        <textarea
          aria-label="Important Notes"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
            setError("");
          }}
          onBlur={() => void save()}
          readOnly={readOnly}
          disabled={loading || !loaded}
          maxLength={10000}
          rows={3}
          placeholder={loading ? "Loading…" : readOnly ? "No notes yet." : "..."}
          className="block min-h-24 w-full resize-y rounded-lg border border-gray-300 bg-(--background) p-3 text-(--text-color) focus-visible:outline-2 disabled:opacity-60"
        />
        {error && (
          <p role="alert" className="mt-2 text-sm text-red-600">
            {error}{" "}
            <button
              type="button"
              className="cursor-pointer font-semibold text-inherit focus-visible:outline-2"
              disabled={loading || saving}
              onClick={() => loaded ? void save() : setReload((value) => value + 1)}
            >
              Try again
            </button>
          </p>
        )}
      </Card>
    </>
  );
}
