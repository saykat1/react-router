import { NavLink } from "react-router-dom";
import NavSub from "./NavSub/NavSub";

import "./Nav.css";

function Nav() {
  function menuButton(event) {
    const parent = event.target.parentElement;

    if (parent.classList.contains("mBtn")) {
      parent.parentElement.classList.toggle("open");
    } else {
      event.target.parentElement.classList.toggle("open");
    }
  }

  return (
    <>
      <button className="mBtn" onClick={(event) => menuButton(event)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className="main-nav">
        <li className="main-nav__item">
          <NavLink
            exact
            to="/"
            className="main-nav__link"
            activeClassName="menuItemActive"
          >
            About
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink
            to="/resume"
            className="main-nav__link"
            activeClassName="menuItemActive"
          >
            Resume
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink
            to="/project/all"
            className="main-nav__link"
            activeClassName="menuItemActive"
          >
            Projects
          </NavLink>

          <NavSub />
        </li>
      </ul>
    </>
  );
}

export default Nav;
