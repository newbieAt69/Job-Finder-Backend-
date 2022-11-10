
const mongoose = require("mongoose");

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log("Database connection successful...");
        })
        .catch((err) => {
            console.log("Database connection error " + err);
        })
    }
}

module.exports = new Database();