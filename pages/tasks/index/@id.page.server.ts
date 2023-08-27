import { PageContextBuiltInServer } from "vite-plugin-ssr/types";
import ITask from "../../../interfaces/ITask";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltInServer) {
  const url = `http://localhost:3000/api/v1/tasks/${pageContext.routeParams.id}`;

  const res = await fetch(url);
  const task = (await res.json()) as ITask;

  return {
    pageContext: {
      pageProps: {
        task,
        title: `Task: ${task.title}`,
        description: `You can do it!`,
      },
    },
  };
}
