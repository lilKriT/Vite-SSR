import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

const getAllTasks = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Tasks!" });
});

const getTask = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Single task" });
});

const createTask = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Creating task" });
});

const updateTask = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Updating task" });
});

const deleteTask = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Deleting task" });
});

export { getAllTasks, getTask, createTask, updateTask, deleteTask };
