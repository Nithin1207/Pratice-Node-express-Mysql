const express = require("express")
const router = express.Router()
const signUp = require("../controllers/signUp")
const StudentDetails = require("../Model/BluePrint")

router.use("/sign-up", signUp.signUp)

router.post("/sign-up-details", (req, res) => {
    const { name, age, email, location } = req.body; // Destructure request body
    const stuDetails = new StudentDetails(name, age, email, location); // Remove `null`

    stuDetails.save()
        .then(() => {
            res.redirect("/sign-up")
        })
        .catch((err) => {
            console.log(err); // Log the error for debugging
            res.status(500).send("An error occurred while saving student details."); // Send error response to client
        });
})

module.exports = router
