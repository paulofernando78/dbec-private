let storageReady;

export const ensurePresenceStorage = (db) => {
  storageReady ??= db.prepare(`CREATE TABLE IF NOT EXISTS student_presence (
    student_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    last_seen_ms INTEGER NOT NULL
  )`).run().catch((error) => {
    storageReady = undefined;
    throw error;
  });
  return storageReady;
};

let teacherStorageReady;

export const ensureTeacherPresenceStorage = (db) => {
  teacherStorageReady ??= db.prepare(`CREATE TABLE IF NOT EXISTS teacher_presence (
    teacher_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    last_seen_ms INTEGER NOT NULL
  )`).run().catch((error) => {
    teacherStorageReady = undefined;
    throw error;
  });
  return teacherStorageReady;
};

export const touchStudentPresence = async (db, studentId) => {
  await ensurePresenceStorage(db);
  const result = await db.prepare(`INSERT INTO student_presence (student_id, last_seen_ms)
    SELECT id, ? FROM users WHERE student_slug = ? AND role = 'student' AND active = 1
    ON CONFLICT(student_id) DO UPDATE SET last_seen_ms = excluded.last_seen_ms`)
    .bind(Date.now(), studentId).run();
  return result.meta.changes > 0;
};

export const clearStudentPresence = async (db, studentId) => {
  await ensurePresenceStorage(db);
  await db.prepare(`DELETE FROM student_presence WHERE student_id = (
    SELECT id FROM users WHERE student_slug = ? AND role = 'student'
  )`).bind(studentId).run();
};

export const touchTeacherPresence = async (db, teacherId) => {
  await ensureTeacherPresenceStorage(db);
  const result = await db.prepare(`INSERT INTO teacher_presence (teacher_id, last_seen_ms)
    SELECT id, ? FROM users WHERE id = ? AND role = 'teacher' AND active = 1
    ON CONFLICT(teacher_id) DO UPDATE SET last_seen_ms = excluded.last_seen_ms`)
    .bind(Date.now(), teacherId).run();
  return result.meta.changes > 0;
};

export const clearTeacherPresence = async (db, teacherId) => {
  await ensureTeacherPresenceStorage(db);
  await db.prepare(`DELETE FROM teacher_presence WHERE teacher_id = ?`)
    .bind(teacherId).run();
};
