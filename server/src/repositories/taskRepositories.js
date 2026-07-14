import pool from "../config/db.js";

export const createTask = async (task) => {
  const query = `
    INSERT INTO tasks
    (title, description, status, priority, due_date)
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *;
  `;

  const values = [
    task.title,
    task.description,
    task.status,
    task.priority,
    task.due_date,
  ];

  console.log("vlauea", values);

  const { rows } = await pool.query(query, values);

  return rows[0];
};

export const getTaskById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM tasks WHERE id=$1", [id]);

  return rows[0];
};

export const deleteTask = async (id) => {
  await pool.query("DELETE FROM tasks WHERE id=$1", [id]);
};

export const updateTask = async (id, task) => {
  const query = `
    UPDATE tasks
    SET
      title=$1,
      description=$2,
      status=$3,
      priority=$4,
      due_date=$5,
      updated_at=NOW()
    WHERE id=$6
    RETURNING *;
  `;

  const values = [
    task.title,
    task.description,
    task.status,
    task.priority,
    task.due_date,
    id,
  ];

  const { rows } = await pool.query(query, values);

  return rows[0];
};

export const getTasks = async ({
  page = 1,
  limit = 5,
  search = "",
  status = "",
  priority = "",
}) => {
  const offset = (page - 1) * limit;

  let where = "WHERE 1=1";
  const values = [];
  let index = 1;

  if (search) {
    where += ` AND LOWER(title) LIKE LOWER($${index++})`;
    values.push(`%${search}%`);
  }

  if (status) {
    where += ` AND status = $${index++}`;
    values.push(status);
  }

  if (priority) {
    where += ` AND priority = $${index++}`;
    values.push(priority);
  }

  const countQuery = `SELECT COUNT(*) FROM tasks ${where}`;
  const countResult = await pool.query(countQuery, values);

  const dataQuery = `
    SELECT *
    FROM tasks
    ${where}
    ORDER BY created_at DESC
    LIMIT $${index++}
    OFFSET $${index++}
  `;

  const dataValues = [...values, limit, offset];

  const taskResult = await pool.query(dataQuery, dataValues);

  return {
    tasks: taskResult.rows,
    total: Number(countResult.rows[0].count),
  };
};
