const express = require("express");

const router = express.Router();

const Projects = require("../models/Projects");

router.get("/", (req, res) => {
  Projects.find()
    .exec()
    .then((response) => {
      res.status(200).send(response);
    });
});

router.get("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Projects.findById(id)
    .exec()
    .then((response) => {
      res.status(200).send(response);
    });
});

router.post("/", (req, res) => {
  Projects.create(req.body).then((response) => {
    res.status(201).send(response);
  });
});

router.put("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Projects.findOneAndUpdate(id, req.body).then((response) => {
    res.sendStatus(204);
  });
});

router.delete("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Projects.findOneAndDelete(id)
    .exec()
    .then((response) => {
      res.sendStatus(204);
    });
});

module.exports = router;
