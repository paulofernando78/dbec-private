export const SELECTED_STUDENT_STORAGE_KEY = "dbec_selected_student_id";
export const DASHBOARD_PATH_STORAGE_KEY = "dbec_dashboard_path";

// The selected student and the last dashboard path belong to a login session,
// not to the browser. Clear them whenever the session ends (logout or expiry)
// so a later visitor does not see a stale student "selected" from before.
export function clearPersistedSessionState() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(SELECTED_STUDENT_STORAGE_KEY);
    window.localStorage.removeItem(DASHBOARD_PATH_STORAGE_KEY);
  } catch {
    // localStorage can be unavailable (private mode, blocked storage).
  }
}
