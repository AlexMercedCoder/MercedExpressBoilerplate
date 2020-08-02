//THIS FILE CONFIGURES YOU MONGO CONNECTION, REQUIRE IN YOUR SERVER.JS TO CONNECT TO DB

//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()

//GLOBAL VARIABLES
const mongoConfig = { useNewUrlParser: true, useUnifiedTopology: true };
const { mongoURI } = process.env;

//CONNECT TO DATABASE
mongoose.connect(mongoURI, mongoConfig, () => {
  console.log("connected to mongo");
});

module.exports = mongoose

