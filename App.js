const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const signIn = require("./routes/signIn")
const signUp = require("./routes/signUp")
const homePage = require("./routes/HomePage")
const StudentDetails = require("./routes/StudentDetails")





app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", "views")

app.use(signIn)
app.use(signUp)
app.use(StudentDetails)
app.use(homePage)


app.listen(3000)




