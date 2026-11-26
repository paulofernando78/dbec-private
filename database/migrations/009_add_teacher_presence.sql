-- Presença de professores: mesma ideia de student_presence, usada pelo header
-- para contar quantos professores estão logados agora.
CREATE TABLE IF NOT EXISTS teacher_presence (
  teacher_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  last_seen_ms INTEGER NOT NULL
);
