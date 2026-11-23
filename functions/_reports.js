let storageReady;

export const ensureReportStorage = (db) => {
  storageReady ??= db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS page_visits (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      path TEXT NOT NULL, title TEXT NOT NULL,
      started_at_ms INTEGER NOT NULL, last_seen_ms INTEGER NOT NULL
    )`),
    db.prepare(`CREATE INDEX IF NOT EXISTS idx_page_visits_student_time
      ON page_visits(student_id, started_at_ms DESC)`),
    db.prepare(`CREATE TABLE IF NOT EXISTS exercise_attempts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      path TEXT NOT NULL, exercise TEXT NOT NULL, answers_json TEXT NOT NULL,
      score INTEGER NOT NULL, total INTEGER NOT NULL, checked_at_ms INTEGER NOT NULL
    )`),
    db.prepare(`CREATE INDEX IF NOT EXISTS idx_exercise_attempts_student_time
      ON exercise_attempts(student_id, checked_at_ms DESC)`),
  ]).catch((error) => {
    storageReady = undefined;
    throw error;
  });
  return storageReady;
};
