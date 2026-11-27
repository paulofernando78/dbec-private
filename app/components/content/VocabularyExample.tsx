import { useLocation } from "react-router";

import { ActionTextRow } from "@/components/content/ActionTextRow";
import { Portuguese } from "@/components/content/Portuguese";
import { Audio } from "@/components/ui/Audio";
import { useSession } from "@/hooks/useSession";
import { ttsAudioUrl, ttsFolderForPath } from "@/utils/tts-audio-url";

export function PhoneticText({ text }: { text: string }) {
  return <>{text.split(/(\/[^/\n]+\/)/g).map((part, index) => (
    part.startsWith("/") && part.endsWith("/")
      ? <span key={index} className="phonetics">{part}</span>
      : part
  ))}</>;
}

export function VocabularyExample({ english, portuguese }: { english: string; portuguese?: string }) {
  const session = useSession();
  const ttsFolder = ttsFolderForPath(useLocation().pathname);
  const spokenText = english.replace(/\s*\(\/[^/]+\/\)/g, "");

  return (
    <ActionTextRow action={
      <Audio
        asButton
        src={session ? ttsAudioUrl(spokenText, { folder: ttsFolder }) : ""}
        fallbackText={spokenText}
        speechLang="en-US"
        ariaLabel={`Listen: ${spokenText}`}
        ttsFolder={ttsFolder}
      />
    }>
      <span lang="en"><PhoneticText text={english} /></span>
      {portuguese && <> — <span lang="pt-BR"><Portuguese>{portuguese}</Portuguese></span></>}
    </ActionTextRow>
  );
}
