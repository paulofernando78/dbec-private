-- Prova de que transferir um aluno entre professores não mexe em nenhum dado de
-- progresso: só users.teacher_id muda.
--
-- Rode antes e depois da transferência e compare. O bloco "progress" tem de sair
-- idêntico; o bloco "ownership" é o único que pode mudar.

-- 1) Progresso por aluno: precisa ser IDÊNTICO antes e depois.
SELECT
  users.student_slug AS student,
  (SELECT COUNT(*) FROM notes WHERE notes.student_id = users.id) AS notes,
  (SELECT COUNT(*) FROM calendar_notes WHERE calendar_notes.student_id = users.id) AS calendar_notes,
  (SELECT COUNT(*) FROM calendar_entries WHERE calendar_entries.student_id = users.id) AS calendar_entries,
  (SELECT COUNT(*) FROM lesson_progress WHERE lesson_progress.user_id = users.id) AS lesson_progress,
  (SELECT COUNT(*) FROM page_visits WHERE page_visits.student_id = users.id) AS page_visits,
  (SELECT COUNT(*) FROM exercise_attempts WHERE exercise_attempts.student_id = users.id) AS exercise_attempts,
  (SELECT COUNT(*) FROM student_presence WHERE student_presence.student_id = users.id) AS presence
FROM users
WHERE users.role = 'student'
ORDER BY users.student_slug;

-- 2) Posse + total de alunos: só o teacher_id do aluno transferido muda.
SELECT
  users.student_slug AS student,
  users.teacher_id AS teacher_id,
  (SELECT COUNT(*) FROM users AS students WHERE students.role = 'student') AS total_students
FROM users
WHERE users.role = 'student'
ORDER BY users.student_slug;
