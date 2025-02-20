const express = require("express")
const router = express.Router()
const StudentDetails = require("../controllers/StudentDetails.js")


router.use("/student-details", StudentDetails.StudentDetails)

module.exports = router