import React from "react";
import ITask from "../../interfaces/ITask";

const TaskList = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task, idx) => (
            <li key={idx}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
