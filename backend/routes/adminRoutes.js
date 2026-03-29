const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.post("/login", adminController.loginAdmin);
router.post("/add-question", adminController.addQuestion);
router.get("/questions", adminController.getQuestions);
router.delete("/delete-question/:id", adminController.deleteQuestion);
router.put("/update-question/:id", adminController.updateQuestion);
router.get("/question/:id", adminController.getQuestionById);



module.exports = router;