import React from "react";
import { Link } from "./Link";

const NavBar = () => {
  return (
    <header className="">
      <Link href="/">Logo</Link>
      <nav>
        <ul>
          <li>
            <Link href="/link1">Link 1</Link>
          </li>
          <li>
            <Link href="/link2">Link 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
