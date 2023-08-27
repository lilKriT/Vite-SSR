import ITask from "../../../interfaces/ITask";
import { PageProps } from "../../../renderer/types";

export { Page };

const Page = ({ task }: { task: ITask }) => {
  return (
    <section className="flex justify-center min-h-screen">
      <div className="container py-16">
        <p>This is your current task:</p>
        <h2 className="text-3xl font-bold">{task.title}</h2>
        {!task.completed ? (
          <p>So far, not done.</p>
        ) : (
          <p>Task completed, good job!</p>
        )}
      </div>
    </section>
  );
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
