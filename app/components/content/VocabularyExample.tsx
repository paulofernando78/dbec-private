import { ActionTextRow } from "@/components/content/ActionTextRow";
import { Portuguese } from "@/components/content/Portuguese";
import { Audio } from "@/components/ui/Audio";
import { useSession } from "@/hooks/useSession";
import { ttsAudioUrl } from "@/utils/tts-audio-url";

export function PhoneticText({ text }: { text: string }) {
  return <>{text.split(/(\/[^/\n]+\/)/g).map((part, index) => (
    part.startsWith("/") && part.endsWith("/")
      ? <span key={index} className="phonetics">{part}</span>
      : part
  ))}</>;
}

export function VocabularyExample({ english, portuguese }: { english: string; portuguese?: string }) {
  const session = useSession();
  const spokenText = english.replace(/\s*\(\/[^/]+\/\)/g, "");

  return (
    <ActionTextRow action={
      <Audio
        asButton
        src={session ? ttsAudioUrl(spokenText) : ""}
        fallbackText={spokenText}
        speechLang="en-US"
        ariaLabel={`Listen: ${spokenText}`}
      />
    }>
      <span lang="en"><PhoneticText text={english} /></span>
      {portuguese && <> — <span lang="pt-BR"><Portuguese>{portuguese}</Portuguese></span></>}
    </ActionTextRow>
  );
}
