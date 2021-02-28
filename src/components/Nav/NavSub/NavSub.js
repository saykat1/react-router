import { NavLink } from "react-router-dom";
import "./NavSub.css";

function NavSub() {
  return (
    <ul className="main-nav__sub sub-menu">
      <li className="sub-menu__item">
        <NavLink
          to="/project/js"
          className="sub-menu__link"
          activeClassName="menuItemActive"
        >
          JS
        </NavLink>
      </li>
      <li className="sub-menu__item">
        <NavLink
          to="/project/react"
          className="sub-menu__link"
          activeClassName="menuItemActive"
        >
          React
        </NavLink>
      </li>
      <li className="sub-menu__item">
        <NavLink
          to="/project/html"
          className="sub-menu__link"
          activeClassName="menuItemActive"
        >
          HTML
        </NavLink>
      </li>
    </ul>
  );
}

export default NavSub;
