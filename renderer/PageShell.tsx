import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
export { PageShell };
import "./PageShell.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </PageContextProvider>
    </React.StrictMode>
  );
}
