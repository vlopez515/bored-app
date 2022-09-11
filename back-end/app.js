// DEPENDENCIES
const cors = require("cors");
const express = require("express");

const app = express();

const activitiesController = require("./controllers/activitiesController.js");

app.use(cors());
app.use(express.json()); 

app.use("/activities", activitiesController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  res.status(404).send("page not found")
})



module.exports = app;
