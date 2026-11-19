const taskModel = require("../models/taskModel");

const createTask = (title, description) => {
  return taskModel.createTask(title, description);

};

const getAllTasks = () => {
  return taskModel.getAllTasks();

};

const getTaskById = (id) => {
  return taskModel.getTaskById(id);
 
};

const updateTask = (id, title, description) => {
  return taskModel.updateTask(id, title, description);

};

const updateTaskStatus = (id, completed) => {
  return taskModel.updateTaskStatus(id, completed)

}

const updateTaskPartial = (id, updates) => {
  return taskModel.updateTaskPartial(id, updates);

}

const deleteTask = (id) => {
 return taskModel.deleteTask(id)

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
