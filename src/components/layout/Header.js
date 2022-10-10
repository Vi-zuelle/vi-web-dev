import Link from {react-router-dom};

function Header() {
  return(
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#technicals">Technicals</a></li>
          <li><Link to="/more">Know me more</Link></li>
        </ul>
      </nav>
      <h1>Hello, I'm Vi</h1>
    </header>
  )
}

export default Header;