const { loginUser, signupUser } = require("../controllers/userController");

const express = require("express");

//router
const router = express.Router();

//login
router.post("/login", loginUser);

//signup
router.post("/signup", signupUser);

module.exports = router;
