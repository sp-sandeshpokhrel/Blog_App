const express = require("express");
const { auth } = require("../Controllers/authController");
const { profile } = require("../Controllers/myProfileController");
const profileRoute = express.Router();

profileRoute.post("/profile", auth, profile);

module.exports = profileRoute;
