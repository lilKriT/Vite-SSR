import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Task from "../models/Task.js";

const getAllTasks = expressAsyncHandler(async (req: Request, res: Response) => {
  const allTasks = await Task.find();
  res.status(200).json(allTasks);
});

const getTask = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Single task" });
});

const createTask = expressAsyncHandler(async (req: Request, res: Response) => {
  const { title, completed } = req.body;

  const newTask = await Task.create({ title, completed });

  if (!newTask) {
    res.status(400);
    throw new Error("Task not created.");
  }
  res.status(200).json(newTask);
});

const updateTask = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Updating task" });
});

const deleteTask = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Deleting task" });
});

export { getAllTasks, getTask, createTask, updateTask, deleteTask };
