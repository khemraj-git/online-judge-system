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