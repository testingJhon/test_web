import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <Link to="/" className="site-logo">
        #Logo
      </Link>
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/host">Host</NavLink>
      </nav>
    </header>
  );
}

export default Header;
