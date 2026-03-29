const model = require("../models/contestQuestionModel");

exports.addQuestion = (req, res) => {

  const question = req.body;

  model.addQuestion(question, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Question Added"
    });

  });

};

exports.getQuestionsByContest = (req, res) => {

  const db = require("../config/db");

  const contestId = req.params.contestId;

  const query = `
  SELECT * FROM contest_questions
  WHERE contest_id = ?
  `;

  db.query(query, [contestId], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

};

exports.deleteQuestion = (req, res) => {

  const db = require("../config/db");

  const id = req.params.id;

  const query = `
  DELETE FROM contest_questions
  WHERE id = ?
  `;

  db.query(query, [id], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Question Deleted"
    });

  });

};

exports.updateQuestion = (req, res) => {

  const db = require("../config/db");

  const id = req.params.id;

  const {
    title,
    description,
    difficulty,
    input,
    expected_output
  } = req.body;

  const query = `
  UPDATE contest_questions
  SET title=?, description=?, difficulty=?, input=?, expected_output=?
  WHERE id=?
  `;

  db.query(
    query,
    [
      title,
      description,
      difficulty,
      input,
      expected_output,
      id
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Question Updated"
      });

    }
  );

};


exports.getSingleQuestion = (req, res) => {

  const db = require("../config/db");

  const id = req.params.id;

  const query = `
  SELECT * FROM contest_questions
  WHERE id = ?
  `;

  db.query(query, [id], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result[0]);

  });

};