import { useState } from "react";
import Logo from "../images/logo.svg";
import Close from "../images/icon-close-menu.svg";
import Open from "../images/icon-menu.svg";
import ArrowDown from "../images/icon-arrow-down.svg";
import ArrowUp from "../images/icon-arrow-up.svg";
import NavMenu from "./NavMenu";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="nav">
      <img className="logo-img" src={Logo} alt="" />
      <div className="menu-icon-container">
        <img src={menu ? Close : Open} alt="" onClick={handleMenu} />
      </div>
      <div className="desktop-menu">
        <div className="links">
          <span className="link">
            Features
            <img className="arrow" src={ArrowDown} alt="" />
          </span>
          <span className="link">
            Company
            <img className="arrow" src={ArrowDown} alt="" />
          </span>
          <span className="link">Careers</span>
          <span className="link">About</span>
        </div>
        <div className="logins">
          <span className="link">Login</span>
          <button className="register">Register</button>
        </div>
      </div>
      {menu && <NavMenu />}
    </header>
  );
};

export default Nav;
