const express = require("express")
const router = express.Router()
const signUp = require("../controllers/signUp")



router.use("/sign-up", signUp.signUp)

router.post("/sign-up-details",signUp.addStudentDetails)


module.exports = router
