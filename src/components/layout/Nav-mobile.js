import { useState } from "react";
import Nav from "./Nav";
import NavButton from "./Nav-button";

const NavMobile = () => {
  const [menuOpened, setMenuOpened] = useState("");

  const handleMenuOpened = (e) => {
    e.preventDefault();
    const menuBar = document.querySelector("#menu-bar");
    const navMobile = document.querySelector(".nav-mobile");

    if (menuBar.classList.contains("menuOpened")) {
      setMenuOpened("");

      if (navMobile.classList.contains("menuOpened")) {
        navMobile.classList.remove("menuOpened");
      }
    } else {
      setMenuOpened("menuOpened");

      if (!navMobile.classList.contains("menuOpened")) {
        navMobile.classList.add("menuOpened");
      }
    }
  };

  return (
    <div className="nav-mobile">
      <Nav onClick={handleMenuOpened} menuOpened={menuOpened} />
      <NavButton onClick={handleMenuOpened} menuOpened={menuOpened} />
      <div
        className="menu-overlay"
        id="menu-bg"
        onClick={handleMenuOpened}
      ></div>
      <div className="menu-bg" id="menu-bg" onClick={handleMenuOpened}></div>
    </div>
  );
};

export default NavMobile;
