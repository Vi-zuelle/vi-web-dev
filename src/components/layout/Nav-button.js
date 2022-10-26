const NavButton = (props) => {
  return (
    <div id="menu-bar" onClick={props.onClick} className={props.menuOpened}>
      <div id="bar1" className="bar"></div>
      <div id="bar2" className="bar"></div>
      <div id="bar3" className="bar"></div>
    </div>
  );
};

export default NavButton;
