-- Fase 0 — Teacher Registration + multi-professor.
--
-- Esta migration APENAS adiciona colunas. Ela não toca em nenhuma tabela de
-- progresso (notes, calendar_notes, calendar_entries, lesson_progress,
-- page_visits, exercise_attempts, student_presence, ai_tutor_*) e nunca
-- recria ou apaga linhas de users.
--
-- Semântica: users.teacher_id IS NULL significa "sem professor".
-- Transferir um aluno é um único UPDATE em users.teacher_id, portanto o
-- histórico do aluno permanece intacto.

ALTER TABLE users
  ADD COLUMN is_admin INTEGER NOT NULL DEFAULT 0
  CHECK (is_admin IN (0, 1));

ALTER TABLE users
  ADD COLUMN teacher_id INTEGER REFERENCES users(id) ON DELETE SET NULL;

ALTER TABLE users
  ADD COLUMN student_limit INTEGER NOT NULL DEFAULT 10;

CREATE INDEX IF NOT EXISTS idx_users_teacher
  ON users (teacher_id);
