const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

// Get data
const FresherJobs = require("./Data/FresherJob.json");
const ExperiencedJobs = require("./Data/ExperiencedJob.json");

//
app.get("/", (req, res) => {
  res.send("Now server is running");
});

// get fresherJobs
app.get("/fresherJobs", (req, res) => {
  res.send(FresherJobs);
});

// get fresherJob by id
app.get("/fresher/:id", (req, res) => {
  const id = req.params.id;
  const result = FresherJobs.find((f) => f.id === id);
  res.send(result);
});

// get experienced Jobs
app.get("/experiencedJobs", async (req, res) => {
  res.send(ExperiencedJobs);
});

// get fresherJob by id
app.get("/experienced/:id", (req, res) => {
  const id = req.params.id;
  const result = ExperiencedJobs.find((f) => f.id === id);
  res.send(result);
});

//
app.listen(Port, () => {
  console.log("Job server is running on", Port);
});
