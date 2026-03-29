const express = require("express");
const router = express.Router();

const contestController = require("../controllers/contestController");

router.post("/create", contestController.createContest);

router.get("/all", contestController.getAllContests);

router.get("/:category", contestController.getContests);

router.delete("/:id", contestController.deleteContest);

router.put("/:id", contestController.updateContest);
module.exports = router;