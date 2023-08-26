import { useState, useEffect } from "react";
import ITask from "../../interfaces/ITask";

export { Page };

const url = "http://localhost:3000";

function Page() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch(`${url}/api/v1/tasks`);
      const data = await res.json();
      setTasks(data);
    };
    fetchTasks();
    console.log(tasks);
  }, []);

  return (
    <section className="flex justify-center min-h-screen">
      <div className="container py-16">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <p>No tasks here so far.</p>
      </div>
    </section>
  );
}
