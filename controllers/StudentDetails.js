const StudentDetails = require("../Model/BluePrint")

exports.StudentDetails = (req, res, next) => {

    StudentDetails.find()
        .then((studentData) => {
            res.render("StudentDetails.ejs", { StudentDetails: studentData })
        })
        .catch((err) => { console.log(err) })

}