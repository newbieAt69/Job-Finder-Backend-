require("dotenv").config()
const express = require('express');
const app = express();
var fs = require('fs');
var morgan = require('morgan');
const logger = require('./logger');
var path = require('path');
var helmet = require('helmet');
const cors = require("cors");
const db = require("./db")

app.use(cors());

//IMPORT ROUTES HERE

// const sportConsumer = require('./routes/sports/consumer');
// const sportProducer = require('./routes/sports/producer');
// const notifies = require('./routes/Notification/notification')



// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan("combined", { stream: logger.stream.write }));

app.use(helmet({
    crossOriginResourcePolicy: false,
}));

app.use(express.urlencoded({extended: false}));
app.use(express.json())

//ROUTES AND SHIT

app.get("/", (req, res) => { 
  res.send("Hello World!");
})


// app.use("/sports/consumer", verifyIP, sportConsumer);
// app.use("/sports/producer", verifyIP, sportProducer);
// app.use("/wallet/notifi", notifies)
app.use("/api/user", require("./routes/auth/registration"));
app.use("/api/user", require("./routes/auth/login"))


app.use(function(req, res, next) {
    //logger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
    res.status(404).json({message:"Not Found!"});
})

app.use(function(err, req, res, next) {
    logger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
    res.status(504).json({message:err.message || "Error Occured!"});
}) 

const server = app.listen(process.env.PORT || 1091, async () => {
    console.log("Server started listening....................");
});


module.exports = server;