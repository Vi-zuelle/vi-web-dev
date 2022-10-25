// import { NavHashLink as NavLink } from "react-router-hash-link";
import { ReactComponent as Logo } from "../../assets/img/logo-vi-blackfill.svg";
import { useState, useEffect } from "react";
import NavDesktop from "./Nav-desktop";
import NavMobile from "./Nav-mobile";
import NavButton from "./Nav-button";

function Header() {
  // useEffect(() => {
  // }, []);
  const [scrollPosition, setScrollPosition] = useState(0);

  const logoEl = document.querySelector(".logo-wrapper");

  window.addEventListener("wheel", (e) => {
    let position = window.pageYOffset;
    handleScroll(position);
    console.log("logoEl EXISTS in scroll event");
    console.log(scrollPosition);
  });

  const handleScroll = (position) => {
    setScrollPosition(position);

    console.log("logoEl EXISTS in handle");

    if (scrollPosition > 50 && logoEl) {
      logoEl.classList.add("logoScrolled");
      console.log("position is MORE than 50");
    } else if (
      scrollPosition <= 50 &&
      logoEl &&
      logoEl.classList.contains("logoScrolled")
    ) {
      logoEl.classList.remove("logoScrolled");
      console.log("position is LESS than 50");
    }
  };

  return (
    <header className="header container">
      {/* <div className="header-top"></div> */}
      <div className="logo-wrapper">
        <a href="#">
          <div className="logo">
            <Logo />
          </div>
        </a>
      </div>
      <div className="header-nav">
        <NavDesktop />
        <NavMobile />
        <NavButton />
      </div>
    </header>
  );
}

export default Header;
