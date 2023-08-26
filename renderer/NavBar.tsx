import { Link } from "./Link";

const NavBar = () => {
  return (
    <header className="flex justify-center pt-4 pb-2 sticky top-0 backdrop-blur shadow-[0_5px_15px_0px] shadow-black/30">
      <nav className="container flex justify-between items-center">
        <Link href="/" className="logo">
          Logo
        </Link>
        <menu className="flex gap-2">
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
        </menu>
      </nav>
    </header>
  );
};

export default NavBar;
