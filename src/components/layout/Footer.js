import { Link }  from 'react-router-dom';

function Footer() {
  return(
    <footer className="footer">
      <div className="contact">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__links">
          <span className="contact__link"><a href="https://www.linkedin.com/in/vipannetier/">linkedin</a></span>
          <span className="contact__link"><a href="https://github.com/Vi-zuelle">github</a></span>
          <span className="contact__link"><Link to="/contact-me">email</Link></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;