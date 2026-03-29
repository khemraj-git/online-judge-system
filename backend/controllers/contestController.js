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


exports.getAllContests = (req, res) => {

  const db = require("../config/db");

  const query = "SELECT * FROM contests ORDER BY start_time DESC";

  db.query(query, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

};



exports.deleteContest = (req, res) => {

  const db = require("../config/db");

  const id = req.params.id;

  const query = "DELETE FROM contests WHERE id=?";

  db.query(query, [id], (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Contest Deleted"
    });

  });

};



exports.updateContest = (req, res) => {

  const db = require("../config/db");

  const id = req.params.id;

  const { name, category, start_time, end_time } = req.body;

  const query = `
  UPDATE contests 
  SET name=?, category=?, start_time=?, end_time=? 
  WHERE id=?
  `;

  db.query(
    query,
    [name, category, start_time, end_time, id],
    (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Contest Updated"
      });

    }
  );

};