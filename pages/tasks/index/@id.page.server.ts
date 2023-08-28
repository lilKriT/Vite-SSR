import { PageContextBuiltInServer } from "vite-plugin-ssr/types";
import ITask from "../../../interfaces/ITask";

export { onBeforeRender };

const url = import.meta.env.PUBLIC_ENV__URL;

async function onBeforeRender(pageContext: PageContextBuiltInServer) {
  const paramsURL = `${url}/api/v1/tasks/${pageContext.routeParams.id}`;

  const res = await fetch(paramsURL);
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
