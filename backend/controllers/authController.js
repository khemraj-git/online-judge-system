const studentModel = require("../models/studentModel");
const generateStudentId = require("../utils/generateStudentId");

exports.registerStudent = (req, res) => {

  console.log("Register API hit");

  const { name, email, password } = req.body;

  console.log(name,email,password);

  studentModel.getLastStudent((err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    const lastId = result.length > 0 ? result[0].student_id : null;
    const studentId = generateStudentId(lastId);

    const student = {
      student_id: studentId,
      name,
      email,
      password
    };

    studentModel.createStudent(student, (err) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Student registered successfully",
        studentId
      });

    });

  });

};

exports.loginStudent = (req, res) => {

  const { email, password } = req.body;

  studentModel.getStudentByEmail(email, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    const student = result[0];

    if (student.password !== password) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    res.json({
      message: "Login successful",
      student
    });

  });

};