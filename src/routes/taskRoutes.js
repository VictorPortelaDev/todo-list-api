const express = require("express");

const taskController = require("../controllers/taskController");

const validateTaskId = require("../middlewares/validateTaskId");
const validateCreateTask = require("../middlewares/validateCreateTask");
const validateUpdateTask = require("../middlewares/validateUpdateTask");
const validatePartialTask = require("../middlewares/validatePartialTask");
const validateTaskStatus = require("../middlewares/validateTaskStatus");

const router = express.Router();

router.post("/", validateCreateTask, taskController.createTask);
router.get("/", taskController.getAllTasks);
router.get("/:id", validateTaskId, taskController.getTaskById);
router.put(
  "/:id",
  validateTaskId,
  validateUpdateTask,
  taskController.updateTask,
);

router.patch(
  "/:id/complete",
  validateTaskId,
  validateTaskStatus,
  taskController.updateTaskStatus,
);

router.patch(
  "/:id",
  validateTaskId,
  validatePartialTask,
  taskController.updateTaskPartial,
);
router.delete("/:id", validateTaskId, taskController.deleteTask);

module.exports = router;
