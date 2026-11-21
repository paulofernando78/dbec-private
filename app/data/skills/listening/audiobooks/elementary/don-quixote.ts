export type AudiobookSection = {
  id: string;
  title: string;
  timestamp?: string;
  text: string;
  questions?: readonly string[];
  localMedia?: string;
  r2?: string;
  imageAlt?: string;
  mediaPosition?: "left" | "right" | "top" | "bottom";
  localAudio?: string;
  r2Audio?: string;
};

const imageBase =
  "/media/images/skills/listening/audiobooks/elementary/don-quixote";

export const donQuixote = {
  slug: "don-quixote",
  title: "Don Quixote",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "",
      localMedia: `local-media/images/skills/listening/audiobooks/elementary/don-quixote/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Don Quixote.",
      mediaPosition: "left",
    },
    {
      id: "chapter-1",
      title: "chapter 1 ...",
      text: "",
      questions: [""],
      localMedia: `local-media/images/skills/listening/audiobooks/elementary/don-quixote/chapter-1.avif`, r2: `${imageBase}/chapter-1.avif`, imageAlt: "", mediaPosition: "left",
    },
  ] satisfies AudiobookSection[],
};
