import { useEffect, useRef, useState } from "react";
import ITask from "../../interfaces/ITask";
import TaskEdit from "../../types/TaskEdit";
import { Link } from "../../renderer/Link";

const Task = ({
  task,
  handleEdit,
  handleDelete,
}: {
  task: ITask;
  handleEdit: (id: string, args: TaskEdit) => void;
  handleDelete: (id: string) => void;
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(task.completed);
  }, [task]);

  const handleChanged = () => {
    handleEdit(task._id, { completed: !checked });
    setChecked(!checked);
  };

  return (
    <article className="p-4 rounded-xl bg-neutral-700 flex justify-between items-center">
      <h2 className="text-xl">{task.title}</h2>
      <div className="flex gap-2">
        <Link className="btn btn--primary" href={`/tasks/${task._id}`}>
          Read more
        </Link>
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
  handleEdit: (id: string, args: TaskEdit) => void;
}) => {
  return (
    <div className="mt-8">
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
