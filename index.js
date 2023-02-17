const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

// Get data
const FresherJobs = require("./Data/FresherJob.json");

//
app.get("/", (req, res) => {
  res.send("Now server is running");
});

app.get("/fresherJobs", (req, res) => {
  res.send(FresherJobs);
});

//
app.listen(Port, () => {
  console.log("Job server is running on", Port);
});
