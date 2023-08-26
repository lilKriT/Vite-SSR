import React from "react";
import logo from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
export { PageShell };
import "./index.css";
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
