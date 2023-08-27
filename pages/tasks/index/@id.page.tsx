import React from "react";
import { PageContextBuiltInServer } from "vite-plugin-ssr/types";
import ITask from "../../../interfaces/ITask";
import { PageProps } from "../../../renderer/types";

export { Page };

const Page = ({ task }: { task: ITask }) => {
  return <div>This should work.{task.title}</div>;
};

// Custom Export
export { getDocumentProps };

// getDocumentProps() can use fetched data to provide <title> and <meta name="description">
function getDocumentProps({ pageProps }: { pageProps: PageProps }) {
  return {
    title: pageProps.title,
    description: pageProps.description,
  };
}
