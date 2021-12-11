const express = require("express");

const router = express.Router();

const Blogs = require("../models/Blogs");

router.get("/", (req, res) => {
  Blogs.find()
    .exec()
    .then((response) => {
      res.status(200).send(response);
    });
});

router.get("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Blogs.findById(id)
    .exec()
    .then((response) => {
      res.status(200).send(response);
    });
});

router.post("/", (req, res) => {
  Blogs.create(req.body).then((response) => {
    res.status(201).send(response);
  });
});

router.put("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Blogs.findOneAndUpdate(id, req.body).then((response) => {
    res.sendStatus(204);
  });
});

router.delete("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Blogs.findOneAndDelete(id)
    .exec()
    .then((response) => {
      res.sendStatus(204);
    });
});

module.exports = router;
