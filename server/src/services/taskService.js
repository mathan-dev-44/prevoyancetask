import * as repository from "../repositories/taskRepositories.js";

export const createTask = async (task) => {
  return await repository.createTask(task);
};

export const getTask = async (id) => {
  const task = await repository.getTaskById(id);

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
};

export const getTasks = async (query) => {
  const { tasks, total } = await repository.getTasks(query);

  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 5;

  return {
    data: tasks,
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  };
};

export const updateTask = async (id, task) => {
  const existing = await repository.getTaskById(id);

  if (!existing) {
    throw new Error("Task not found");
  }

  return await repository.updateTask(id, task);
};

export const deleteTask = async (id) => {
  const existing = await repository.getTaskById(id);

  if (!existing) {
    throw new Error("Task not found");
  }

  await repository.deleteTask(id);
};
