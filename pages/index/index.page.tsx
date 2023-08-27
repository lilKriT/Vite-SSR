import { useState, useEffect } from "react";
import ITask from "../../interfaces/ITask";
import TaskList from "./TaskList";

export { Page };

// const url = "http://localhost:3000";
const url = import.meta.env.PUBLIC_ENV__URL;
const secret = import.meta.env.PUBLIC_ENV__SECRET;

function Page() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  // Tasks CRUD
  const fetchTasks = async () => {
    const res = await fetch(`${url}/api/v1/tasks`);
    const data = await res.json();
    setTasks(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTitle("");

    await fetch(`${url}/api/v1/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    await fetchTasks();
  };

  const handleEdit = async (id: string, args: Partial<ITask>) => {
    await fetch(`${url}/api/v1/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    });

    await fetchTasks();
  };

  const handleDelete = async (id: string) => {
    await fetch(`${url}/api/v1/tasks/${id}`, {
      method: "DELETE",
    });

    await fetchTasks();
  };

  return (
    <section className="flex justify-center min-h-screen">
      <div className="container py-16 flex flex-col">
        <p>Secret: {secret}</p>
        <p>URL: {url}</p>
        <h1 className="text-3xl font-bold">Tasks</h1>
        <TaskList
          tasks={tasks}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-neutral-600 mt-8 p-4 rounded-lg flex items-center gap-4 mx-auto w-full max-w-2xl"
        >
          <label className="text-lg grow">
            <input
              type="text"
              placeholder="Task"
              className="bg-transparent w-full text-2xl p-2 border-b-2 border-b-emerald-500 focus:outline-none"
              autoFocus
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <button className="btn btn--primary">Add</button>
        </form>
      </div>
    </section>
  );
}

export const documentProps = {
  // This title and description will override the defaults
  title: "Super Awesome Task List!",
  description: "Stay organized ;)",
};
