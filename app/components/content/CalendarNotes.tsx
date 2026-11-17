import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function CalendarNotes({ studentId, readOnly }: { studentId: string; readOnly: boolean }) {
  const [content, setContent] = useState("");
  const [savedContent, setSavedContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
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
        if (!response.ok) throw new Error("Não foi possível carregar as observações.");
        return response.json() as Promise<{ content: string }>;
      })
      .then(({ content: text }) => {
        if (controller.signal.aborted) return;
        setContent(text);
        setSavedContent(text);
        setLoaded(true);
      })
      .catch(() => {
        if (!controller.signal.aborted) setError("Não foi possível carregar as observações.");
      })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [studentId, reload]);

  async function save() {
    if (saving || readOnly || !loaded) return;
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
      setError("Não foi possível salvar. Seu texto foi mantido; tente novamente.");
    } finally { setSaving(false); }
  }

  return (
    <>
      <span className="mb-2 block font-bold">Important Notes</span>
      <Card className="mb-4 bg-(--background)">
        <textarea
          aria-label="Important Notes"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          readOnly={readOnly}
          disabled={loading || !loaded}
          maxLength={10000}
          rows={3}
          placeholder={loading ? "Carregando…" : readOnly ? "Nenhuma observação." : "Observações importantes para este aluno…"}
          className="block min-h-24 w-full resize-y rounded-lg border border-gray-300 bg-(--background) p-3 text-(--text-color) focus-visible:outline-2 disabled:opacity-60"
        />
        <div className="mt-2 flex items-center gap-2">
          {!readOnly && loaded && <Button icon={<Save />} ariaLabel="Salvar observações" onClick={save} disabled={saving || content === savedContent} />}
          <span role="status" className="text-sm text-gray-500">
            {loading ? "Carregando…" : saving ? "Salvando…" : loaded && !readOnly ? content === savedContent ? "Salvo" : "Alterações não salvas" : ""}
          </span>
          {!loading && !loaded && <button type="button" onClick={() => setReload((value) => value + 1)}>Tentar novamente</button>}
        </div>
        {error && <p role="alert" className="mt-2 text-sm text-red-600">{error}</p>}
      </Card>
    </>
  );
}
