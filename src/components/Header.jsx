import { Link, NavLink } from "react-router-dom";

import "../assets/nav_footer.scss";
import "../assets/smarthphone.scss";

function Header() {
  return (
    <header>
      <Link to="/products" className="site-logo">
        <span className="logo-puca">Puca</span>Huayta
        <span className="logo-sufix">TEX</span>
      </Link>
      <nav>
        {/* <NavLink to="/about">Nosotros</NavLink> */}
        <NavLink to="/products">Productos</NavLink>
        <NavLink to="/contactus">Contactenos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
