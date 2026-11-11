import { useMemo, useRef, useState } from "react";
import { Check, Eye, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { TryItData } from "@/data/course/lesson-step-types";

type Token = { id: string; word: string };
type ContainerName = "bank" | "answer";

function WordContainer({
  id,
  tokens,
  placeholder,
  onTokenClick,
  onDragBegin,
  onDragFinish,
  onDropToken,
}: {
  id: ContainerName;
  tokens: Token[];
  placeholder?: string;
  onTokenClick: (token: Token) => void;
  onDragBegin: () => void;
  onDragFinish: () => void;
  onDropToken: (tokenId: string, target: ContainerName, index: number) => void;
}) {
  const [isOver, setIsOver] = useState(false);

  const getInsertionIndex = (event: React.DragEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>("[data-token-id]");
    if (!target || !event.currentTarget.contains(target)) return tokens.length;

    const rect = target.getBoundingClientRect();
    const isAfter = event.clientX > rect.left + rect.width / 2;
    const index = tokens.findIndex((token) => token.id === target.dataset.tokenId);
    return index < 0 ? tokens.length : index + Number(isAfter);
  };

  return (
    <div
      data-drop-container={id}
      onDragOver={(event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        setIsOver(true);
      }}
      onDragLeave={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsOver(false);
        }
      }}
      onDrop={(event) => {
        event.preventDefault();
        setIsOver(false);
        const tokenId = event.dataTransfer.getData("text/plain");
        if (tokenId) onDropToken(tokenId, id, getInsertionIndex(event));
      }}
      className={`flex min-h-17 flex-wrap items-center gap-2 rounded-xl border border-dashed p-3 transition-colors ${
        id === "answer" ? "bg-white" : "border-transparent"
      } ${isOver ? "border-sky-500 bg-sky-50" : "border-gray-300"}`}
    >
      {tokens.length === 0 && placeholder ? (
        <span className="pointer-events-none text-slate-500">{placeholder}</span>
      ) : null}
      {tokens.map((token) => (
        <button
          key={token.id}
          type="button"
          draggable
          data-token-id={token.id}
          onDragStart={(event) => {
            onDragBegin();
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", token.id);
            event.dataTransfer.setData("application/x-try-it-source", id);
          }}
          onDragEnd={onDragFinish}
          onClick={() => onTokenClick(token)}
          className="cursor-grab touch-manipulation rounded-lg border border-gray-300 bg-[var(--background)] px-3 py-2 select-none active:cursor-grabbing"
        >
          {token.word}
        </button>
      ))}
    </div>
  );
}

function SentenceBuilder({
  words,
  correctAnswer,
  number,
}: {
  words: readonly string[];
  correctAnswer: readonly string[];
  number: number;
}) {
  const initialTokens = useMemo(
    () => words.map((word, index) => ({ id: `${number}-${index}`, word })),
    [number, words],
  );
  const [bank, setBank] = useState<Token[]>(initialTokens);
  const [answer, setAnswer] = useState<Token[]>([]);
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const suppressClickRef = useRef(false);

  const moveToken = (
    tokenId: string,
    to: ContainerName,
    targetIndex: number,
  ) => {
    const from: ContainerName = bank.some((token) => token.id === tokenId)
      ? "bank"
      : "answer";
    const source = from === "bank" ? bank : answer;
    const token = source.find((item) => item.id === tokenId);
    if (!token) return;

    const destination = to === "bank" ? bank : answer;
    const fromIndex = source.findIndex((item) => item.id === tokenId);
    const boundedIndex = Math.max(0, Math.min(targetIndex, destination.length));

    if (from === to) {
      const adjustedIndex = fromIndex < boundedIndex ? boundedIndex - 1 : boundedIndex;
      if (adjustedIndex === fromIndex) return;
      const reordered = [...source];
      reordered.splice(fromIndex, 1);
      reordered.splice(adjustedIndex, 0, token);
      (to === "bank" ? setBank : setAnswer)(reordered);
    } else {
      (from === "bank" ? setBank : setAnswer)((items) =>
        items.filter((item) => item.id !== tokenId),
      );
      (to === "bank" ? setBank : setAnswer)((items) => {
        const next = [...items];
        next.splice(Math.min(boundedIndex, next.length), 0, token);
        return next;
      });
    }
    setResult(null);
  };

  const handleTokenClick = (token: Token, from: ContainerName, to: ContainerName) => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
    const currentIndex = (to === "answer" ? answer : bank).length;
    moveToken(token.id, to, currentIndex);
    void from;
  };

  const handleDragBegin = () => {
    suppressClickRef.current = true;
  };

  const handleDragFinish = () => {
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 100);
  };

  const showAnswer = () => {
    const unused = [...initialTokens];
    const ordered = correctAnswer.map((word) => {
      const index = unused.findIndex((token) => token.word === word);
      return unused.splice(index, 1)[0];
    });
    setAnswer(ordered);
    setBank(unused);
    setResult(null);
  };

  const reset = () => {
    setBank(initialTokens);
    setAnswer([]);
    setResult(null);
  };

  const check = () => {
    const isCorrect =
      answer.length === correctAnswer.length &&
      answer.every((token, index) => token.word === correctAnswer[index]);
    setResult(isCorrect ? "correct" : "incorrect");
  };

  return (
    <article className="rounded-xl bg-[var(--background)] p-4">
      <div className="mb-3 flex items-start gap-2">
        <b className="pt-3">{number}.</b>
        <div className="min-w-0 flex-1">
          <WordContainer
            id="bank"
            tokens={bank}
            onTokenClick={(token) => handleTokenClick(token, "bank", "answer")}
            onDragBegin={handleDragBegin}
            onDragFinish={handleDragFinish}
            onDropToken={(tokenId, target, index) => moveToken(tokenId, target, index)}
          />
        </div>
      </div>
      <WordContainer
        id="answer"
        tokens={answer}
        onTokenClick={(token) => handleTokenClick(token, "answer", "bank")}
        onDragBegin={handleDragBegin}
        onDragFinish={handleDragFinish}
        onDropToken={(tokenId, target, index) => moveToken(tokenId, target, index)}
      />

      <p
        className={`mt-2 min-h-6 text-sm font-semibold ${
          result === "correct" ? "text-green-700" : "text-red-600"
        }`}
        aria-live="polite"
      >
        {result === "correct" ? "Correct!" : result === "incorrect" ? "Try again." : ""}
      </p>

      <div className="mt-1 flex gap-3">
        <Button ariaLabel="Check answer" icon={<Check />} onClick={check} />
        <Button ariaLabel="Reset answer" icon={<RotateCcw />} onClick={reset} />
        <Button ariaLabel="Show answer" icon={<Eye />} onClick={showAnswer} />
      </div>
    </article>
  );
}

export function TryItStep({ data }: { data: TryItData }) {
  return (
    <div className="rounded-2xl bg-[var(--surface)] p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>
      <div className="grid gap-6">
        {data.items.map((item, index) => (
          <SentenceBuilder
            key={index}
            number={index + 1}
            words={item.words}
            correctAnswer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}
