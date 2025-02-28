const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const signIn = require("./routes/signIn")
const signUp = require("./routes/signUp")
const homePage = require("./routes/HomePage")
const StudentDetails = require("./routes/StudentDetails")

const mongoose = require("mongoose")




app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", "views")

app.use(signIn)
app.use(signUp)
app.use(StudentDetails)
app.use(homePage)


mongoose.connect("mongodb+srv://nithinkumarputti:Nithin@ecommerce.5npsg.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce")
    .then((result) => { app.listen(3000) })
    .catch((err) => { console.log(err) })




