CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  student_slug TEXT UNIQUE,
  display_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  schedule TEXT,
  class_time TEXT,
  password_hash TEXT,
  password_salt TEXT,
  active INTEGER NOT NULL DEFAULT 1
    CHECK (active IN (0, 1)),
  plan TEXT NOT NULL DEFAULT 'free'
    CHECK (plan IN ('free', 'plus')),
  role TEXT NOT NULL DEFAULT 'student'
    CHECK (role IN ('teacher', 'student')),
  is_admin INTEGER NOT NULL DEFAULT 0
    CHECK (is_admin IN (0, 1)),
  -- NULL significa "sem professor": o aluno existe, com todo o histórico dele,
  -- apenas aguardando um responsável. Admin reatribui pela interface.
  teacher_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  -- Ignorado quando is_admin = 1: o admin não tem cota de alunos.
  student_limit INTEGER NOT NULL DEFAULT 10,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_users_teacher
  ON users (teacher_id);

CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL,
  note_type TEXT NOT NULL
    CHECK (note_type IN ('teacher', 'student')),
  content TEXT NOT NULL DEFAULT '',
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE (student_id, note_type)
);

CREATE TABLE IF NOT EXISTS student_presence (
  student_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  last_seen_ms INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS teacher_presence (
  teacher_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  last_seen_ms INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS page_visits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  path TEXT NOT NULL,
  title TEXT NOT NULL,
  started_at_ms INTEGER NOT NULL,
  last_seen_ms INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_page_visits_student_time ON page_visits(student_id, started_at_ms DESC);

CREATE TABLE IF NOT EXISTS exercise_attempts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  path TEXT NOT NULL,
  exercise TEXT NOT NULL,
  answers_json TEXT NOT NULL,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  checked_at_ms INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_exercise_attempts_student_time ON exercise_attempts(student_id, checked_at_ms DESC);

CREATE TABLE IF NOT EXISTS calendar_notes (
  student_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL DEFAULT '',
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS calendar_entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL,
  lesson_date TEXT NOT NULL,
  replacement_date TEXT,
  status TEXT NOT NULL DEFAULT '...'
    CHECK (status IN ('...', 'P', 'OK', 'ROK', 'SC', 'TC', 'R', 'H')),
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE (student_id, lesson_date)
);

CREATE INDEX IF NOT EXISTS idx_calendar_entries_student_date
  ON calendar_entries (student_id, lesson_date);

CREATE INDEX IF NOT EXISTS idx_notes_student_type
  ON notes (student_id, note_type);

CREATE TABLE IF NOT EXISTS lesson_progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  lesson_id TEXT NOT NULL,
  completed INTEGER NOT NULL DEFAULT 0
    CHECK (completed IN (0, 1)),
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE (user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_lesson_progress_user
  ON lesson_progress (user_id);

CREATE TABLE IF NOT EXISTS ai_tutor_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_key TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_ai_tutor_requests_user_created
  ON ai_tutor_requests (user_key, created_at);

CREATE TABLE IF NOT EXISTS ai_tutor_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_key TEXT NOT NULL,
  messages TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_ai_tutor_history_user
  ON ai_tutor_history (user_key, id);
