import React from "react";
import { PageContextBuiltInServer } from "vite-plugin-ssr/types";
import ITask from "../../../interfaces/ITask";

export { Page };
export { onBeforeRender };

const Page = ({ task }: { task: ITask }) => {
  return <div>This should work.{task.title}</div>;
};

async function onBeforeRender(pageContext: PageContextBuiltInServer) {
  const dataUrl = `https://star-wars.brillout.com/api/films/${pageContext.routeParams.id}.json`;
  const url = `http://localhost:3000/api/v1/tasks/${pageContext.routeParams.id}`;
  // let response: Response
  // try {
  //   response = await fetch(dataUrl)
  // } catch (err) {
  //   throw RenderErrorPage({ pageContext: { pageProps: { errorDescription: `Couldn't fetch data ${dataUrl}` } } })
  // }
  // let movie = (await response.json()) as MovieDetails

  // We remove data we don't need because we pass `pageContext.movie` to
  // the client; we want to minimize what is sent over the network.
  // movie = filterMovieData(movie);

  const res = await fetch(url);
  const task = (await res.json()) as ITask;

  // const { title } = movie;

  return {
    pageContext: {
      pageProps: {
        task,
      },
      // documentProps: {
      //   // The page's <title>
      //   title,
      // },
    },
  };
}
