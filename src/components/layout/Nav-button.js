import { useState } from "react";

function NavButton() {
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
      console.log("CLICK");
    } else {
      setMenuOpened("menuOpened");

      if (!navMobile.classList.contains("menuOpened")) {
        navMobile.classList.add("menuOpened");
      }
      console.log("CLICK");
    }
  };

  return (
    <div id="menu-bar" onClick={handleMenuOpened} className={menuOpened}>
      <div id="bar1" className="bar"></div>
      <div id="bar2" className="bar"></div>
      <div id="bar3" className="bar"></div>
    </div>
  );
}

export default NavButton;
