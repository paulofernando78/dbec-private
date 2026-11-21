type AudiobookImage = {
  localMedia?: string;
  r2?: string;
  imageAlt?: string;
};

type AudiobookBlock =
  | { text: string; r2?: never }
  | (AudiobookImage & { r2: string; text?: never });

export type AudiobookSection = AudiobookImage & {
  id: string;
  mediaPosition?: "left" | "right" | "top" | "bottom";
  localAudio?: string;
  r2Audio?: string;
  title: string;
  timestamp?: string;
  text: string | readonly AudiobookBlock[];
  questions?: readonly string[];
  answers?: readonly string[];
};

const imageBase =
  "/media/images/skills/listening/audiobooks/beginner/...";

export const a = {
  slug: "...",
  title: "title",
  audio: "",
  sections: [
    {
      id: "introduction",
      mediaPosition: "left",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/.../cover.avif`,
      imageAlt: "Cover of title.",
      r2: `${imageBase}/cover.avif`,
      title: "Introduction",
      text: "",
    },
    {
      id: "chapter-1",
      mediaPosition: "left",
      localMedia: `local-media/images/skills/listening/audiobooks/beginner/.../chapter-1.avif`,
      imageAlt: "",
      r2: `${imageBase}/chapter-1.avif`,
      title: "Chapter 1",
      text: ``,
      questions: ["q1",],
      answers: ["a1",],
    },
  ] satisfies AudiobookSection[],
};
