import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bot, Send } from "lucide-react";

import { Button } from "@/components/ui/Button";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

const welcomeMessage: ChatMessage = {
  role: "model",
  text: "Hello! Send me a sentence to check, ask about a word, or practice a conversation.",
};

function readHistory(key: string): ChatMessage[] {
  try {
    const history: unknown = JSON.parse(localStorage.getItem(key) ?? "null");
    if (Array.isArray(history)) {
      return history.filter(
        (message): message is ChatMessage =>
          (message?.role === "user" || message?.role === "model") &&
          typeof message.text === "string",
      );
    }
  } catch {
    // The tutor can still run when browser storage is unavailable.
  }
  return [welcomeMessage];
}

function renderTutorText(text: string) {
  return text
    .split(/\*\*([^*\r\n]+)\*\*/)
    .map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className="font-bold">{part}</strong>
      ) : (
        part
      ),
    );
}

export function AiTutor({
  className = "mt-3",
  fill = false,
  visible = true,
}: { className?: string; fill?: boolean; visible?: boolean }) {
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [historyKey, setHistoryKey] = useState<string | null>(null);
  const sendingRef = useRef(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible || sendingRef.current) return;

    setHistoryKey(null);
    const controller = new AbortController();
    async function loadHistory() {
      const response = await fetch("/api/ai-chat", { signal: controller.signal });
      if (!response.ok) {
        throw new Error(response.status === 401
          ? "Log in to use the AI Tutor."
          : "Could not load your AI Tutor history.");
      }
      const history = await response.json() as { account: string; messages: ChatMessage[] };
      const { account } = history;
      let savedMessages = history.messages;
      const key = `dbec_ai_tutor:${account}`;
      const localMessages = readHistory(key);
      if (savedMessages.length === 0 && localMessages.some(({ role }) => role === "user")) {
        const imported = await fetch("/api/ai-chat", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ account, messages: localMessages }),
          signal: controller.signal,
        });
        if (!imported.ok) throw new Error("Could not sync your AI Tutor history.");
        savedMessages = (await imported.json()).messages;
      }
      if (!controller.signal.aborted) {
        setMessages(savedMessages.length ? savedMessages : [welcomeMessage]);
        setError("");
        setHistoryKey(account);
      }
    }

    void loadHistory().catch((error: Error) => {
      if (!controller.signal.aborted) {
        setHistoryKey(null);
        setMessages([welcomeMessage]);
        setError(error.message);
      }
    });

    return () => controller.abort();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isSending, visible]);

  const sendMessage = async (event?: FormEvent) => {
    event?.preventDefault();
    const text = draft.trim();
    if (!text || sendingRef.current || !historyKey) return;
    sendingRef.current = true;

    const previousMessages = messages;
    const question = { role: "user" as const, text };
    const nextMessages = [...previousMessages, question];
    setMessages(nextMessages);
    setDraft("");
    setError("");
    setNotice("");
    setIsSending(true);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account: historyKey,
          messages: nextMessages.slice(-12).map(({ role, text }) => ({
            role,
            text: text.slice(0, 2_000),
          })),
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.error ?? "The tutor could not answer right now.");
      }
      setMessages(result.messages);
      setNotice(result.fallbackNotice ?? "");
    } catch (requestError) {
      setMessages(previousMessages);
      setDraft(text);
      setError(
        requestError instanceof Error
          ? requestError.message
          : "The tutor could not answer right now.",
      );
    } finally {
      sendingRef.current = false;
      setIsSending(false);
    }
  };

  return (
    <section
      id="ai-tutor"
      aria-labelledby="ai-tutor-title"
      className={`${className} flex w-full scroll-mt-4 flex-col overflow-hidden rounded-xl bg-(--background) ring-1 ring-slate-200`}
    >
      <header className="flex items-center gap-3 border-b border-slate-200 px-4 py-3">
        <div className="grid size-9 place-items-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          <Bot className="size-5" aria-hidden="true" />
        </div>
        <div>
          <h3 id="ai-tutor-title" className="font-black">AI English Tutor</h3>
          <p className="text-xs text-slate-500">Corrections, meanings and conversation practice</p>
        </div>
      </header>

      <div
        ref={messagesRef}
        className={`${fill ? "min-h-24 flex-1" : "max-h-52 min-h-24"} space-y-3 overflow-y-auto px-4 py-3`}
        aria-live="polite"
      >
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm leading-6 ${
                message.role === "user"
                  ? "rounded-br-md bg-blue-600 text-white"
                  : "rounded-bl-md bg-(--surface)"
              }`}
            >
              {message.role === "model" ? renderTutorText(message.text) : message.text}
            </div>
          </div>
        ))}
        {isSending && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-(--surface) px-4 py-2 text-sm text-slate-500">
              Thinking…
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={sendMessage}
        className="w-full border-t border-slate-200 bg-(--surface) p-3"
      >
        {error && (
          <p role="alert" className="mb-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
            {error}
          </p>
        )}
        {notice && (
          <p role="status" className="mb-2 rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
            {notice}
          </p>
        )}
        <div className="flex w-full items-end gap-2">
          <textarea
            value={draft}
            onChange={(event) => setDraft(event.target.value.slice(0, 2_000))}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void sendMessage();
              }
            }}
            placeholder="Ask a question or write a sentence…"
            aria-label="Message to AI Tutor"
            rows={2}
            className="max-h-32 min-h-13 w-full flex-1 resize-y rounded-xl border border-slate-300 bg-(--background) px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
          <Button
            type="submit"
            ariaLabel="Send message"
            icon={<Send />}
            disabled={!draft.trim() || isSending || !historyKey}
            className="size-12! p-1!"
          />
        </div>
        <p className="mt-2 text-center text-[0.68rem] text-slate-400">
          AI can make mistakes. Check important information with your teacher.
        </p>
      </form>
    </section>
  );
}
