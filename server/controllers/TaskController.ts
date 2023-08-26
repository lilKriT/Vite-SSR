import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

const getAllTasks = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Tasks!" });
});

export { getAllTasks };
