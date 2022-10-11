import { NavHashLink as NavLink } from "react-router-hash-link";

function Header() {
  return(
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><NavLink to="/#skills">Skills</NavLink></li>
          <li><NavLink to="/#experience">Experience</NavLink></li>
          <li><NavLink to="/#technicals">Technicals</NavLink></li>
          <li><NavLink to="/know-more">Know me more</NavLink></li>
          <li><NavLink to="/contact-me">Contact me</NavLink></li>
        </ul>
      </nav>
      <h1>Hello, I'm Vi</h1>
    </header>
  )
}

export default Header;