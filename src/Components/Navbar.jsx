import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shop-nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? "link active-link" : "link")}
      > Shop </NavLink>

      <NavLink to="/about" className={({ isActive }) => (isActive ? "link active-link" : "link")}
      > About </NavLink>

      <NavLink to="/contactUs" className={({ isActive }) => (isActive ? "link active-link" : "link")}
      > Contact Us </NavLink>
    </nav>
  );
};

export default Navbar;
