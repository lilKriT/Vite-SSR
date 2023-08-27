import { useEffect, useRef, useState } from "react";
import ITask from "../../interfaces/ITask";

const Task = ({
  task,
  handleEdit,
  handleDelete,
}: {
  task: ITask;
  handleEdit: (id: string, args: Object) => void;
  handleDelete: (id: string) => void;
}) => {
  const [checked, setChecked] = useState(task.completed);

  const handleChanged = () => {
    setChecked(!checked);
    handleEdit(task._id, { completed: !checked });
  };

  return (
    <article className="p-4 rounded-xl bg-neutral-700 flex justify-between items-center">
      <h2 className="text-xl">{task.title}</h2>
      <div className="flex gap-2">
        <input
          type="checkbox"
          className="w-8 rounded-lg cursor-pointer"
          onChange={handleChanged}
          checked={checked}
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
  handleEdit,
}: {
  tasks: ITask[];
  handleDelete: (id: string) => void;
  handleEdit: (id: string, args: Object) => void;
}) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-lg">No tasks yet.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {tasks.map((task, idx) => (
            <li key={idx}>
              <Task
                task={task}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
