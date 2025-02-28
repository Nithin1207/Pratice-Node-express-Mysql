const express = require("express");
const router = express.Router();
const HomePage = require("../controllers/HomePage.js")

router.get("/", HomePage.HomePage);

module.exports = router;
