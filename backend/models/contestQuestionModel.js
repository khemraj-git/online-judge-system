const db = require("../config/db");

const addQuestion = (question, callback) => {

  const query = `
  INSERT INTO contest_questions
  (contest_id, title, description, difficulty, input, expected_output)
  VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      question.contest_id,
      question.title,
      question.description,
      question.difficulty,
      question.input,
      question.expected_output
    ],
    callback
  );
};

module.exports = {
  addQuestion
};