import { PageContextBuiltInServer } from "vite-plugin-ssr/types";
import fetch from "cross-fetch";
import ITask from "../../../interfaces/ITask";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltInServer) {
  const localURL = import.meta.env.PUBLIC_ENV__URL;
  const url = `${localURL}/api/v1/tasks/${pageContext.routeParams.id}`;

  // const res = await fetch(url);
  const res = await fetch(url);
  const task = (await res.json()) as ITask;
  // const task = {
  //   title: url,
  //   completed: true,
  // };

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
