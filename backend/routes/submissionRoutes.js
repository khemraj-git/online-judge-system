const express = require("express");
const router = express.Router();

const submissionController = require("../controllers/submissionController");

router.post("/submit", submissionController.submitCode);

router.get("/all", submissionController.getSubmissions);

router.get("/:contestId", submissionController.getSubmissions);

router.get("/leaderboard/:contestId", submissionController.getLeaderboard)

router.get("/contest", submissionController.getContestTime);
module.exports = router;