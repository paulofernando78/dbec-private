export type AudiobookSection = {
  id: string;
  mediaPosition?: "left" | "right" | "top" | "bottom";
  localMedia?: string;
  imageAlt?: string;
  r2Audio?: string;
  localAudio?: string;
  r2?: string;
  title: string;
  timestamp?: string;
  text: string;
  questions?: readonly string[];
  answers?: readonly string[];
};



const imageBase =
  "/media/images/skills/listening/audiobooks/elementary/...";

export const a = {
  slug: "...",
  title: "title",
  audio: "",
  sections: [
    {
      id: "summary",
      mediaPosition: "left",
      localMedia: `local-media/images/skills/listening/audiobooks/elementary/.../cover.avif`,
      imageAlt: "Cover of Project Omega.",
      r2: `${imageBase}/cover.avif`,
      title: "Summary",
      text: "",
    },
    {
      id: "chapter-1",
      mediaPosition: "left",
      localMedia: `local-media/images/skills/listening/audiobooks/elementary/.../chapter-1.avif`,
      imageAlt: "",
      r2: `${imageBase}/chapter-1.avif`,
      title: "chapter 1 a rich man desappears",
      text: "",
      questions: [""],
      answers: [""],
    },
  ] satisfies AudiobookSection[],
};
