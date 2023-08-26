import { Router } from "express";
import { getAllTasks } from "../controllers/TaskController.js";

const taskRoutes = Router();

taskRoutes.get("/", getAllTasks);

export default taskRoutes;
