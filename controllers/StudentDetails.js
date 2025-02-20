const StudentDetails = require("../Model/BluePrint")

exports.StudentDetails = (req, res, next) => {

    StudentDetails.fetchDetails()
        .then(([rows]) => {
            res.render("StudentDetails.ejs", { StudentDetails: rows })
        })
        .catch((err) => { console.log(err) })

}