const contestModel = require("../models/contestModel");

exports.createContest = (req, res) => {

  const contest = req.body;

  contestModel.createContest(contest, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
    message: "Contest Created",
    insertId: result.insertId
    });

  });

};


exports.getContests = (req, res) => {

  const db = require("../config/db");

  const category = req.params.category;

  const query = `
  SELECT * FROM contests
  WHERE category = ?
  ORDER BY start_time ASC
  `;

  db.query(query, [category], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

};