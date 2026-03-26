const db = require("../config/db");

const createStudent = (student, callback) => {
  const query = `
    INSERT INTO students (student_id, name, email, password)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    query,
    [student.student_id, student.name, student.email, student.password],
    callback
  );
};

const getLastStudent = (callback) => {
  const query = `
    SELECT student_id FROM students 
    ORDER BY id DESC 
    LIMIT 1
  `;

  db.query(query, callback);
};

module.exports = {
  createStudent,
  getLastStudent
};


const getStudentByEmail = (email, callback) => {
  const query = "SELECT * FROM students WHERE email = ?";

  db.query(query, [email], callback);
};

module.exports = {
  createStudent,
  getLastStudent,
  getStudentByEmail
};