import { thingsAroundUsListening } from "./a1/unit-2/extra-listening";
import { unitListening as a1 } from "./a1/extra-listening";
import { unitListening as a2 } from "./a2/extra-listening";
import { unitListening as a2B1 } from "./a2-b1/extra-listening";
import { unitListening as b1 } from "./b1/extra-listening";
import { unitListening as b2 } from "./b2/extra-listening";
import { unitListening as c1 } from "./c1/extra-listening";

export type UnitListeningContent = {
  title: string;
  dialogues: readonly {
    title?: string;
    lines: readonly { speaker: string; text: string }[];
    questions: readonly { question: string; choices: readonly string[]; correct: number }[];
  }[];
};

const contentByLevel = { a1, a2, "a2-b1": a2B1, b1, b2, c1 };

export const extraListeningByUnit: Readonly<
  Record<string, UnitListeningContent | undefined>
> = {
  ...Object.fromEntries(
    Object.entries(contentByLevel).flatMap(([level, units]) =>
      Object.entries(units).map(([unit, content]) => [`${level}/${unit}`, content]),
    ),
  ),
  "a1/2": thingsAroundUsListening,
};
