import { acceptVsExcept } from "./accept-except";
import { frozenVsFrostbite } from "./frozen-vs-frostbite";
import { hearVsListen } from "./hear-vs-listen";
import { poisonousVsVenomous } from "./poisonous-vs-venomous";
import { quickVsFast } from "./quick-vs-fast";
import { raiseVsRise } from "./raise-vs-rise";
import { speakVsSayVsTell } from "./speak-vs-say-vs-tell";
import { lieVsLay } from "./lie-vs-lay";
import { lendVsBorrow } from "./lend-vs-borrow";
import { pretendVsIntend } from "./pretend-vs-intend";
import { stationaryVsStationery } from "./stationary-vs-stationery";
import { robVsSteal } from "./rob-steal";
import { sinkVsDrown } from "./sink-vs-drown";
import { seeVsWatch } from "./see-vs-watch";

export const vocabularyTopics = [
  hearVsListen,
  speakVsSayVsTell,
  quickVsFast,
  frozenVsFrostbite,
  poisonousVsVenomous,
  lieVsLay,
  stationaryVsStationery,
  acceptVsExcept,
  robVsSteal,
  pretendVsIntend,
  lendVsBorrow,
  sinkVsDrown,
  raiseVsRise,
  seeVsWatch,
] as const;

export type VocabularyTopicId = (typeof vocabularyTopics)[number]["id"];

export const vocabularyTopicsById = Object.fromEntries(
  vocabularyTopics.map((topic) => [topic.id, topic]),
) as Record<VocabularyTopicId, (typeof vocabularyTopics)[number]>;

