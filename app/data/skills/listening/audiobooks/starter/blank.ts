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
  "/media/images/audiobooks/starter/book";

export const blank = {
  slug: "book",
  title: "Book",
  audio: "",
  sections: [
    {
      id: "summary",
      title: "Summary",
      text: "",
      localMedia: `local-media/images/audiobooks/starter/book/cover.avif`,
      r2: `${imageBase}/cover.avif`,
      imageAlt: "Cover of Book",
      mediaPosition: "left",
    },
    {
      id: "paragrah-1",
      title: "paragrah 1",
      text: `”`,
      questions: [""],
      localMedia: `local-media/images/audiobooks/starter/book/paragrah-1.avif`, r2: `${imageBase}/paragrah-1.avif`, imageAlt: "", mediaPosition: "left",
    },
  ] satisfies AudiobookSection[],
};
