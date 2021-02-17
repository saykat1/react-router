import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <ul className="main-nav">
      <li className="main-nav__item">
        <NavLink exact to="/" className="main-nav__link">
          About
        </NavLink>
      </li>
      <li className="main-nav__item">
        <NavLink to="/resume" className="main-nav__link">
          Resume
        </NavLink>
      </li>
      <li className="main-nav__item">
        <NavLink to="/project" className="main-nav__link">
          Projects
        </NavLink>
        <ul className="main-nav__sub sub-menu">
          <li className="sub-menu__item">
            <NavLink to="/project/js" className="sub-menu__link">
              JS
            </NavLink>
          </li>
          <li className="sub-menu__item">
            <NavLink to="/project/react" className="sub-menu__link">
              React
            </NavLink>
          </li>
          <li className="sub-menu__item">
            <NavLink to="/project/html" className="sub-menu__link">
              HTML
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Nav;
