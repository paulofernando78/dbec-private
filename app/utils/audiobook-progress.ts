const audiobookProgressKey = (slug: string) =>
  `dbec_audiobook_${slug}_completed`;
const audiobookSectionProgressKey = (slug: string) =>
  `dbec_audiobook_${slug}_sections`;

export function isAudiobookCompleted(slug: string) {
  return localStorage.getItem(audiobookProgressKey(slug)) === "1";
}

export function completeAudiobook(slug: string) {
  localStorage.setItem(audiobookProgressKey(slug), "1");
}

export function resetAudiobook(slug: string) {
  localStorage.removeItem(audiobookProgressKey(slug));
  localStorage.removeItem(audiobookSectionProgressKey(slug));
}

export function getAudiobookSectionProgress(slug: string): Record<string, boolean> {
  try {
    const saved = localStorage.getItem(audiobookSectionProgressKey(slug));
    const parsed = saved ? JSON.parse(saved) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function setAudiobookSectionCompleted(slug: string, sectionId: string, completed: boolean) {
  const progress = getAudiobookSectionProgress(slug);
  if (completed) progress[sectionId] = true;
  else delete progress[sectionId];
  localStorage.setItem(audiobookSectionProgressKey(slug), JSON.stringify(progress));
}
