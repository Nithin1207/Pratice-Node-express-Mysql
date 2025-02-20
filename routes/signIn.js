const express = require("express")
const router = express.Router()
const signIn = require("../controllers/signIn.js")


router.use("/sign-in", signIn.signIn)

module.exports = router
