const taskModel = require("../models/taskModel");

const createTask = async (title, description) => {
  const task = await taskModel.createTask(title, description);

  return task;
};

const getAllTasks = async () => {
  const tasks = await taskModel.getAllTasks();

  return tasks;
};

const getTaskById = async (id) => {
  const task = await taskModel.getTaskById(id);

  return task;
};

const updateTask = async (id, title, description) => {
    const task = await taskModel.updateTask(id, title, description);

    return task;
};

const updateTaskStatus = async (id, completed) => {
    const task = await taskModel.updateTaskStatus(id, completed)

    return task
}

const updateTaskPartial = async () => {
    const task = await taskModel.updateTaskPartial()

    return task
}

const deleteTask = async (id) => {
  const task = await taskModel.deleteTask(id)

  return task
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  updateTaskStatus,
  updateTaskPartial,
  deleteTask
};
