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
  "/media/images/audiobooks/elementary/project-omega";

export const newZealandAdventure = {
  slug: "project-omega",
  title: "Project Omega",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "",
      localMedia: `local-media/images/audiobooks/elementary/project-omega/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Project Omega.",
      mediaPosition: "left",
    },
    {
      id: "chapter-1",
      title: "chapter 1 a rich man desappears",
      text: "",
      questions: [""],
      localMedia: `local-media/images/audiobooks/elementary/project-omega/chapter-1.avif`, r2: `${imageBase}/chapter-1.avif`, imageAlt: "", mediaPosition: "left",
    },
    {
      id: "chapter-2",
      title: "chapter 2 the new boss",
      text: "",
      questions: [""],
      localMedia: `local-media/images/audiobooks/elementary/project-omega/chapter-2.avif`, r2: `${imageBase}/chapter-2.avif`, imageAlt: "", mediaPosition: "left",
    },
    {
      id: "chapter-3",
      title: "chapter 3 power",
      text: "",
      questions: [""],
      localMedia: `local-media/images/audiobooks/elementary/project-omega/chapter-3.avif`, r2: `${imageBase}/chapter-3.avif`, imageAlt: "", mediaPosition: "left",
    },
    {
      id: "chapter-4",
      title: "chapter 4 danger",
      text: "",
      questions: [""],
      localMedia: `local-media/images/audiobooks/elementary/project-omega/chapter-4.avif`, r2: `${imageBase}/chapter-4.avif`, imageAlt: "", mediaPosition: "left",
    },
    {
      id: "chapter-5",
      title: "chapter 5 an evil plan",
      text: "",
      questions: [""],
      localMedia: `local-media/images/audiobooks/elementary/project-omega/chapter-5.avif`, r2: `${imageBase}/chapter-5.avif`, imageAlt: "", mediaPosition: "left",
    },
    {
      id: "chapter-6",
      title: "chapter 6 a friend",
      text: "",
      questions: [""],
      localMedia: `local-media/images/audiobooks/elementary/project-omega/chapter-6.avif`, r2: `${imageBase}/chapter-6.avif`, imageAlt: "", mediaPosition: "left",
    },
    {
      id: "chapter-7",
      title: "chapter 7 happy christmas!",
      text: "",
      questions: [""],
      localMedia: `local-media/images/audiobooks/elementary/project-omega/chapter-7.avif`, r2: `${imageBase}/chapter-7.avif`, imageAlt: "", mediaPosition: "left",
    },
    {
      id: "chapter-8",
      title: "chapter 8 father and daughter",
      text: "",
      questions: [""],
      localMedia: `local-media/images/audiobooks/elementary/project-omega/chapter-8.avif`, r2: `${imageBase}/chapter-8.avif`, imageAlt: "", mediaPosition: "left",
    },
  ] satisfies AudiobookSection[],
};
