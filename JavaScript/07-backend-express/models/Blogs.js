const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Blogs = mongoose.model(
  "Blog",
  new Schema({
    image: String,
    title: String,
    description: String,
  })
);

module.exports = Blogs;
