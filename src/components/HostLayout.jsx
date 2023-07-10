import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav>
        <NavLink end to="/host">
          Dashboard
        </NavLink>
        <NavLink to="/host/income">income</NavLink>
        <NavLink to="/host/review">review</NavLink>
        <NavLink to="/host/vans">vans</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
