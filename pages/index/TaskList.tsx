import React from "react";
import ITask from "../../interfaces/ITask";

const Task = ({ task }: { task: ITask }) => {
  return (
    <article className="p-4 rounded-xl bg-neutral-700 flex justify-between">
      <h2 className="text-xl">{task.title}</h2>
      <input type="checkbox" className="" />
    </article>
  );
};

const TaskList = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-lg">No tasks yet.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {tasks.map((task, idx) => (
            <li key={idx}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
