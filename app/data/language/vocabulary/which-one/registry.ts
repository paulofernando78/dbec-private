import { acceptVsExcept } from "./accept-except";
import { frozenVsFrostbite } from "./frozen-vs-frostbite";
import { hearVsListen } from "./hear-vs-listen";
import { poisonousVsVenomous } from "./poisonous-vs-venomous";
import { quickVsFast } from "./quick-vs-fast";
import { speakVsSayVsTell } from "./speak-vs-say-vs-tell";
import { lieVsLay } from "./lie-vs-lay";
import { stationaryVsStationery } from "./stationary-vs-stationery";

export const vocabularyTopics = [
  hearVsListen,
  speakVsSayVsTell,
  quickVsFast,
  frozenVsFrostbite,
  poisonousVsVenomous,
  lieVsLay,
  stationaryVsStationery,
  acceptVsExcept,
] as const;

export type VocabularyTopicId = (typeof vocabularyTopics)[number]["id"];

export const vocabularyTopicsById = Object.fromEntries(
  vocabularyTopics.map((topic) => [topic.id, topic]),
) as Record<VocabularyTopicId, (typeof vocabularyTopics)[number]>;

