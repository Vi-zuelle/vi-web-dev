import { NavHashLink as NavLink } from "react-router-hash-link";

const Nav = (props) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={props.onClick} className="nav-item">
          <span className="link-wrapper">
            <NavLink to="/#skills">#Skills</NavLink>
          </span>
        </li>
        <li onClick={props.onClick} className="nav-item">
          <span className="link-wrapper">
            <NavLink to="/#experience">#Experience</NavLink>
          </span>
        </li>
        <li onClick={props.onClick} className="nav-item">
          <span className="link-wrapper">
            <NavLink to="/#technicals">#Technicals</NavLink>
          </span>
        </li>
        <li onClick={props.onClick} className="nav-item">
          <span className="link-wrapper">
            <NavLink to="/know-more">Know me more</NavLink>
          </span>
        </li>
        <li onClick={props.onClick} className="nav-item">
          <span className="link-wrapper">
            <NavLink to="/contact-me">Contact me</NavLink>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
