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

  const contestId = req.params.contestId;

  const query = `

SELECT 
s.*,
st.name AS student_name,
q.title AS question_title,
c.name AS contest_name

FROM submissions s

JOIN students st 
ON s.student_id = st.student_id

JOIN contest_questions q 
ON s.question_id = q.id

JOIN contests c 
ON s.contest_id = c.id

WHERE s.contest_id = ?

ORDER BY s.submitted_at DESC

`;

  db.query(query,[contestId], (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(result);

  });

};

exports.getLeaderboard = (req,res)=>{

const contestId = req.params.contestId;

const query = `

SELECT 
st.student_id,
st.name,
COUNT(*) AS solved

FROM submissions s

JOIN students st 
ON s.student_id = st.student_id

WHERE s.status='Passed'
AND s.contest_id = ?

GROUP BY st.student_id

ORDER BY solved DESC

`;

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