const mysql = require("mysql2")
const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    database:"student-details",
    password:"Nithin@2000"
})

module.exports = pool.promise()