import { Router } from "express";

import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import validateTask from "../middlewares/validatemiddleware.js";

const router = Router();

router.get("/", getTasks);

router.get("/:id", getTask);

router.post("/", validateTask, createTask);

router.put("/:id", validateTask, updateTask);

router.delete("/:id", deleteTask);

export default router;
