const express = require("express");
const router = express.Router();

const controller = require("../controllers/contestQuestionController");

router.post("/add", controller.addQuestion);

module.exports = router;