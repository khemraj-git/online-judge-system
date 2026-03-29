const express = require("express");
const router = express.Router();

console.log("Auth Routes Loaded");

const authController = require("../controllers/authController");

router.post("/register", authController.registerStudent);
router.post("/login", authController.loginStudent);

module.exports = router;