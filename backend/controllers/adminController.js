const adminModel = require("../models/adminModel");

exports.loginAdmin = (req, res) => {

  const { username, password } = req.body;

  adminModel.getAdmin(username, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Admin not found"
      });
    }

    const admin = result[0];

    if (admin.password !== password) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    res.json({
      message: "Login successful",
      admin
    });

  });

};

const questionModel = require("../models/questionModel");

exports.addQuestion = (req, res) => {

  const { title, description, input, expectedOutput, deadline } = req.body;

  const question = {
    title,
    description,
    input,
    expectedOutput,
    deadline
  };

  questionModel.addQuestion(question, (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Question added successfully"
    });

  });

};

exports.getQuestions = (req, res) => {

  questionModel.getQuestions((err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

};


//deleete queestion
exports.deleteQuestion = (req, res) => {

  const id = req.params.id;

  questionModel.deleteQuestion(id, (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Question deleted"
    });

  });

};

//update questions   hehehehe majja aa raha hain
exports.updateQuestion = (req, res) => {

  const id = req.params.id;

  questionModel.updateQuestion(id, req.body, (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Question updated"
    });

  });

};


exports.getQuestionById = (req, res) => {

  const id = req.params.id;

  questionModel.getQuestionById(id, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result[0]);

  });

};