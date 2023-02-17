const express = require("express");

//router
const router = express.Router();

//get all projects
router.get("/", (req, res) => {
  res.json({ message: "get all projects" });
});

//GET a single project
router.get("/:id", (req, res) => {
  res.json({ message: "get a single project" });
});

//POST a new project
router.post("/:id", (req, res) => {
  res.json({ message: "post a new project" });
});

//DELETE a project
router.delete("/", (req, res) => {
  res.json({ message: "delete a project" });
});

//UPDATE a project
router.patch("/:id", (req, res) => {
  res.json({ message: "update a project" });
});

module.exports = router;
