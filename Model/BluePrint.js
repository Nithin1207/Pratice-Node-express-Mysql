const db = require("../util/database");

module.exports = class Student {
    constructor(name, age, email, location) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.location = location;
    }

    save() {
        return db.execute(
            "INSERT INTO StudentDetails (name, age, email, location) VALUES (?,?,?,?)",
            [this.name, this.age, this.email, this.location]
        );
    }

    static fetchDetails() {
        return db.execute("SELECT * FROM StudentDetails");
    }
};