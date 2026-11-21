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
  "/media/images/skills/listening/audiobooks/starter/...";

export const aaa = {
  slug: "...",
  title: "title",
  audio: "",
  sections: [
    {
      id: "summary",
      mediaPosition: "left",
      localMedia: `local-media/images/skills/listening/audiobooks/starter/.../cover.avif`,
      imageAlt: "Cover of title",
      r2: `${imageBase}/cover.avif`,
      title: "Summary",
      text: "",
    },
    {
      id: "paragraph-1",
      mediaPosition: "left",
      localMedia: `local-media/images/skills/listening/audiobooks/starter/.../paragraph-1.avif`,
      imageAlt: "",
      r2: `${imageBase}/paragraph-1.avif`,
      title: "Paragraph 1",
      text: ``,
      questions: ["",],
      answers: ["",],
    },
  ] satisfies AudiobookSection[],
};
