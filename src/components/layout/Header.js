import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

function Header() {
  return (
    <header className="header container">
      {/* <img src={require(`../../assets/img/jacques-cartier.jpg`)} alt="" /> */}
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <span className="link-wrapper">
              <NavLink to="/#skills">Skills</NavLink>
            </span>
          </li>
          <li className="nav-item">
            <span className="link-wrapper">
              <NavLink to="/#experience">Experience</NavLink>
            </span>
          </li>
          <li className="nav-item">
            <span className="link-wrapper">
              <NavLink to="/#technicals">Technicals</NavLink>
            </span>
          </li>
          <li className="nav-item">
            <span className="link-wrapper">
              <NavLink to="/know-more">Know me more</NavLink>
            </span>
          </li>
          <li className="nav-item">
            <span className="link-wrapper">
              <NavLink to="/contact-me">Contact me</NavLink>
            </span>
          </li>
        </ul>
      </nav>
      {/* <h1>Hello, I'm Vi</h1> */}
    </header>
  );
}

export default Header;
