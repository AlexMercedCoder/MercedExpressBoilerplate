//DEPENDENCIES
require("dotenv").config();
const express = require("express"); //bringing in the express library
const app = express();
const mongoose = require("./db"); //Importing Connection
const cors = require("cors");
const morgan = require('morgan')



//GLOBALS
const {NODE_ENV, PORT} = process.env
const db = mongoose.connection


//DB Error event
db.on('error', (error) => {
    console.log(`MONGO ERROR: ${error}`)
})



//CONFIGURE CORS

const whitelist = [
  "http://localhost:3000/",
  "http://localhost:3000",
];
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};



//MIDDLEWARE
NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptionsDelegate))
app.use(express.json());
app.use(morgan('dev'))
app.use(express.static("public"));



//ROUTES

app.get("/", (req, res) => {
  res.send("Hello World");
});



//LISTENER
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});