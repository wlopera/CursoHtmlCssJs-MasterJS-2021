const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Projects = mongoose.model(
  "Project",
  new Schema({
    title: String,
    description: String,
  })
);

module.exports = Projects;
