import React from "react";
import { PageContextBuiltInServer } from "vite-plugin-ssr/types";
import ITask from "../../../interfaces/ITask";

export { Page };

const Page = ({ task }: { task: ITask }) => {
  return <div>This should work.{task.title}</div>;
};
