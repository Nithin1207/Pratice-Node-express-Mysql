const StudentDetails = require("../Model/BluePrint")


exports.signUp = (req, res, next) => {
    res.render("signUp.ejs");
};


exports.addStudentDetails = (req, res) => {
    const { name, age, email, location } = req.body;
    const stuDetails = new StudentDetails({name:name, age:age, email:email, location:location});

    stuDetails.save()
        .then(() => {
            res.redirect("/sign-up")
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("An error occurred while saving student details.");
        });
}