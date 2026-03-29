const db = require("../config/db");

const addQuestion = (question, callback) => {
  const query = `
    INSERT INTO questions (title, description, input, expected_output, deadline)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      question.title,
      question.description,
      question.input,
      question.expectedOutput,
      question.deadline
    ],
    callback
  );
};

const getQuestions = (callback) => {
  const query = "SELECT * FROM questions";
  db.query(query, callback);
};

const deleteQuestion = (id, callback) => {
  const query = "DELETE FROM questions WHERE id = ?";
  db.query(query, [id], callback);
};

const updateQuestion = (id, question, callback) => {
  const query = `
    UPDATE questions 
    SET title=?, description=?, deadline=? 
    WHERE id=?
  `;

  db.query(
    query,
    [question.title, question.description, question.deadline, id],
    callback
  );
};

const getQuestionById = (id, callback) => {
  const query = "SELECT * FROM questions WHERE id = ?";
  db.query(query, [id], callback);
};

module.exports = {
  addQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion,
  getQuestionById
};