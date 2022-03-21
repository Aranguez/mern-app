const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "get tasks",
  });
});

router.post("/", (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("`text` parameter is missing");
  }

  res.status(200).json({
    message: `create task ${req.body.text}`,
  });
});

router.put("/:id", (req, res) => {
  if (!req.params.id) {
    req.status(400);
    throw new Error("`id` parameter is missing");
  }

  res.status(200).json({
    message: `updated task: ${req.params.id}`,
  });
});

router.delete("/:id", (req, res) => {
  if (!req.params.id) {
    req.status(400);
    throw new Error("`id` parameter is missing");
  }

  res.status(200).json({
    message: `deleted task: ${req.params.id}`,
  });
});

module.exports = router;
