import React from "react";
import ITask from "../../interfaces/ITask";

const Task = ({
  task,
  handleDelete,
}: {
  task: ITask;
  handleDelete: (id: string) => void;
}) => {
  return (
    <article className="p-4 rounded-xl bg-neutral-700 flex justify-between">
      <h2 className="text-xl">{task.title}</h2>
      <div className="flex gap-2">
        <input
          type="checkbox"
          className="w-8 rounded-lg "
          onChange={(e) => console.log("Change")}
        />
        <button
          className="btn btn--danger uppercase font-bold"
          onClick={() => handleDelete(task._id)}
        >
          Del
        </button>
      </div>
    </article>
  );
};

const TaskList = ({
  tasks,
  handleDelete,
}: {
  tasks: ITask[];
  handleDelete: (id: string) => void;
}) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-lg">No tasks yet.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {tasks.map((task, idx) => (
            <li key={idx}>
              <Task task={task} handleDelete={handleDelete} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
