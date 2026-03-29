const express = require("express");
const router = express.Router();

const controller = require("../controllers/contestQuestionController");

router.post("/add", controller.addQuestion);

router.get("/single/:id", controller.getSingleQuestion);

router.get("/:contestId", controller.getQuestionsByContest);

router.delete("/:id", controller.deleteQuestion);

router.put("/:id", controller.updateQuestion);

module.exports = router;