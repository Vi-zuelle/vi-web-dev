import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="contact__content container">
          <h2 className="contact__title">_Contact</h2>
          <div className="contact__links">
            <span className="contact__link linkedin">
              <a
                href="https://www.linkedin.com/in/vipannetier/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </span>
            <span className="contact__link github">
              <a
                href="https://github.com/Vi-zuelle"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </span>
            <span className="contact__link email">
              <Link to="/contact-me">email</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="footer__message">
        <p>
          Handmade with{" "}
          <a
            href="https://en.wikipedia.org/wiki/Love"
            target="_blank"
            className="love ext-link"
            rel="noreferrer"
          >
            love
          </a>{" "}
          and{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            className="react ext-link"
            rel="noreferrer"
          >
            React
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
