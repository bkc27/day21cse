const { createTask, getTasks, singleTask, editTask, deleteTask } = require("../controllers/taskController");
const express = require("express");
const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", singleTask);
router.put("/:id", editTask);
router.delete("/:id", deleteTask);

module.exports = router;