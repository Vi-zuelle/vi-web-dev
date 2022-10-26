// import { NavHashLink as NavLink } from "react-router-hash-link";
import { ReactComponent as Logo } from "../../assets/img/logo-vi-blackfill.svg";
// import { useState } from "react";
import { Link } from "react-router-dom";
import NavDesktop from "./Nav-desktop";
import NavMobile from "./Nav-mobile";

const Header = () => {
  return (
    <header className="header container">
      <div className="logo-wrapper">
        <Link to="/">
          <div className="logo">
            <Logo />
          </div>
        </Link>
      </div>
      <div className="header-nav">
        <NavDesktop />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
