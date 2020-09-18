"use strict";

const express = require("./node_modules/express");
const bodyParser = require("./node_modules/body-parser");
const morgan = require("./node_modules/morgan");
const http = require("http");
const _ = require("./node_modules/lodash");

require("dotenv").config();

const { createHaikuDB, getAllHaikus } = require("./haikuHandlers");

const PORT = process.env.PORT || 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //testing endpoints
  .get("/", (req, res) => {
    res.status(200).send({ countries: "uniqueCountries" });
  })

  //Create a Haiku DataBase

  .post("/myHaiku", createHaikuDB)

  //testing endpoints

  .get("/allHaikus", getAllHaikus)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
