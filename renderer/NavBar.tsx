import { Link } from "./Link";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center p-2">
      <Link href="/" className="logo">
        Logo
      </Link>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link href="/about" className="navLink">
              About
            </Link>
          </li>
          <li>
            <Link href="/nothing" className="navLink">
              Nothing?
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
