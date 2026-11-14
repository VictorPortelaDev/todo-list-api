const { pool } = require("../config/database.js");

const createTask = async (title, description) => {
  const query = `
        INSERT INTO tasks (title, description) 
        VALUES ($1, $2)
        RETURNING *;
        `;

  const values = [title, description];

  const result = await pool.query(query, values);

  return result.rows[0];
};

const getAllTasks = async () => {
  const query = `
    SELECT * FROM tasks
    ORDER BY created_ad DESC;
    `;

  const result = await pool.query(query);

  return result.rows;
};

const getTaskById = async (id) => {
  const query = `
  SELECT * FROM tasks
  WHERE id = $1;`;

  const values = [id];

  const result = await pool.query(query, values);

  return result.rows[0];
};

const updateTask = async (id, title, description) => {
  const query = `
    UPDATE tasks
    SET 
        title = $1,
        description = $2,
        updated_ad = CURRENT_TIMESTAMP
    WHERE id = $3
    RETURNING *;`;

  const values = [title, description, id];

  const result = await pool.query(query, values);

  return result.rows[0];
};

const updateTaskPartial = async (id, updates) => {
  const fields = [];
  const values = [];

  if (updates.title !== undefined) {
    values.push(updates.title);
    fields.push(`title = $${values.length}`);
  }

  if (updates.description !== undefined) {
    values.push(updates.description);
    fields.push(`description = $${values.length}`);
  }

  values.push(id);

  const query = `
    UPDATE tasks
    SET 
      ${fields.join(", ")},
      updated_ad = CURRENT_TIMESTAMP
    WHERE id = $${values.length}
    RETURNING *;
    `;

  const result = await pool.query(query, values);

  return result.rows[0];
};

const updateTaskStatus = async (id, completed) => {
  const query = `
        UPDATE tasks
        SET
            completed = $1,
            updated_ad = CURRENT_TIMESTAMP
        WHERE id = $2
        RETURNING *;
    `;

  const values = [completed, id];

  const result = await pool.query(query, values);

  return result.rows[0];
};

const deleteTask = async (id) => {
  const query = `
  DELETE FROM tasks
  WHERE id = $1
  RETURNING *;
  `;

  const values = [id];

  const result = await pool.query(query, values);

  return result.rows[0];
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  updateTaskStatus,
  updateTaskPartial,
  deleteTask
};
