import { NavHashLink as NavLink } from "react-router-hash-link";

function Header() {
  return (
    <header className="header container">
      {/* <img src={require(`../../assets/img/jacques-cartier.jpg`)} alt="" /> */}
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <NavLink to="/#skills">Skills</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/#experience">Experience</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/#technicals">Technicals</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/know-more">Know me more</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact-me">Contact me</NavLink>
          </li>
        </ul>
      </nav>
      <h1>Hello, I'm Vi</h1>
    </header>
  );
}

export default Header;
