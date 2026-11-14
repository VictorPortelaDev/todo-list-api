const express = require("express");

const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/", taskController.createTask);
router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.put("/:id", taskController.updateTask);
router.patch("/:id/complete", taskController.updateTaskStatus);
router.patch("/:id", taskController.updateTaskPartial);
router.delete("/:id", taskController.deleteTask)

module.exports = router;
