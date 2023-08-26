import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/TaskController.js";

const taskRoutes = Router();

taskRoutes.get("/", getAllTasks);
taskRoutes.get("/:id", getTask);
taskRoutes.post("/", createTask);
taskRoutes.put("/:id", updateTask);
taskRoutes.delete("/:id", deleteTask);

export default taskRoutes;
