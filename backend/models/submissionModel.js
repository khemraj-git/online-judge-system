const db = require("../config/db");

const addSubmission = (submission, callback) => {
  const query = `
    INSERT INTO submissions 
    (student_id, question_id, code, language, output, status)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      submission.student_id,
      submission.question_id,
      submission.code,
      submission.language,
      submission.output,
      submission.status
    ],
    callback
  );
};

module.exports = {
  addSubmission
};