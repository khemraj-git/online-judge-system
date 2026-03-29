const submissionModel = require("../models/submissionModel");

exports.submitCode = (req, res) => {

  const submission = req.body;

  submissionModel.addSubmission(submission, (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Submission saved"
    });

  });

};

exports.getSubmissions = (req, res) => {

  const db = require("../config/db");

  const query = `
SELECT 
  s.*,
  st.name AS student_name,
  q.title AS question_title
FROM submissions s
JOIN (
  SELECT 
    student_id, 
    question_id, 
    MAX(submitted_at) AS latest
  FROM submissions
  GROUP BY student_id, question_id
) latest_sub
ON s.student_id = latest_sub.student_id
AND s.question_id = latest_sub.question_id
AND s.submitted_at = latest_sub.latest
JOIN students st 
  ON s.student_id = st.student_id
JOIN questions q 
  ON s.question_id = q.id
ORDER BY s.submitted_at DESC
`;

  db.query(query, (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(result);

  });

};

exports.getLeaderboard = (req, res) => {

  const db = require("../config/db");

  const query = `
  SELECT 
    st.student_id,
    st.name,
    COUNT(*) AS solved,
    MAX(s.submitted_at) AS last_submission
  FROM submissions s
  JOIN students st 
    ON s.student_id = st.student_id
  WHERE s.status = 'Passed'
  GROUP BY st.student_id
  ORDER BY solved DESC, last_submission ASC
  `;

  db.query(query, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

};


exports.getContestTime = (req, res) => {

  const db = require("../config/db");

  const query = "SELECT * FROM contest LIMIT 1";

  db.query(query, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result[0]);

  });

};