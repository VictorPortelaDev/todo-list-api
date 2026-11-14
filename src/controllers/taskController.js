const taskService = require("../service/taskService");

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await taskService.createTask(title, description);

    return res.status(201).json(task);
  } catch (error) {
    console.error("Erro ao criar tarefa: ", error);
    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();

    return res.status(200).json(tasks);
  } catch (error) {
    console.error("Erro ao buscar tarefas: ", error);
    return res.status(500).json({
      message: "Erro interno do servidor.",
    });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await taskService.getTaskById(id);

    if (!task) {
      return res.status(404).json({
        message: "Tarefa não encontrada.",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);

    return res.json(500).json({
      message: "Erro interno do servidor.",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const task = await taskService.updateTask(id, title, description);

    if (!task) {
      return res.status(404).json({
        message: "Tarefa não encontrada.",
      });
    }

    return res.status(200).json(task);
  } catch (error) {
    console.error("Erro ao atualizar tarefa:", error);

    return res.status(500).json({
      message: "Erro interno do servidor.",
    });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    const task = await taskService.updateTaskStatus(id, completed);

    if (!task) {
      return res.status(404).json({
        message: "Tarefa não encontrada.",
      });
    }

    return res.status(200).json(task);
  } catch (error) {
    console.error("Erro ao atualizar status da tarefa:", error);

    return res.status(500).json({
      message: "Erro interno do servidor.",
    });
  }
};

const updateTaskPartial = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.title === undefined && updates.description === undefined) {
      return res.status(400).json({
        message: "Informe pelo menos um campo para atualizar.",
      });
    }

    const task = await taskService.updateTaskPartial(id, updates);

    if (!task) {
      return res.status(404).json({
        message: "Tarefa não encontrada.",
      });
    }

    return res.status(200).json(task);
  } catch (error) {
    console.error("Erro ao atualizar tarefa: ", error);

    return res.status(500).json({
      message: "Erro interno do servidor.",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await taskService.deleteTask(id);

    if (!task) {
      return res.status(404).json({
        message: "Tarefa não encontrada.",
      });
    }

    return res.status(200).json({
      message: "Tarefa excluída com sucesso.",
      task,
    });
  } catch (error) {
    console.error("Erro ao excluir tarefa: ", error);

    res.status(500).json({
      message: "Erro interno do servidor.",
    });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  updateTaskStatus,
  updateTaskPartial,
  deleteTask,
};
