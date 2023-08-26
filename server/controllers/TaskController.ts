import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Task from "../models/Task.js";
import taskRoutes from "../routes/TaskRoutes.js";

const getAllTasks = expressAsyncHandler(async (req: Request, res: Response) => {
  const allTasks = await Task.find();
  res.status(200).json(allTasks);
});

const getTask = expressAsyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found.");
  }
  res.status(200).json(task);
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
  const { id } = req.params;
  const updatedArgs = { ...req.body };

  const updatedTask = await Task.findByIdAndUpdate(id, updatedArgs, {
    new: true,
  });

  if (!updatedTask) {
    res.status(400);
    throw new Error("Task couldn't be updated.");
  }

  res.status(200).json(updatedTask);
});

const deleteTask = expressAsyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const taskToDelete = await Task.findById(id);
  if (!taskToDelete) {
    res.status(400);
    throw new Error("Task not found.");
  }

  await taskToDelete.deleteOne();

  res.status(200).json({ msg: `Task with id: ${id} deleted.` });
});

export { getAllTasks, getTask, createTask, updateTask, deleteTask };
