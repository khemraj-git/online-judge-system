const express = require("express");
const router = express.Router();

const contestController = require("../controllers/contestController");

router.post("/create", contestController.createContest);
router.get("/:category", contestController.getContests);

module.exports = router;