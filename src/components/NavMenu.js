import { useState } from "react";
import ArrowDown from "../images/icon-arrow-down.svg";
import ArrowUp from "../images/icon-arrow-up.svg";

const NavMenu = () => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  const toggleFeatures = () => {
    setFeatures(!features);
  };

  const toggleCompany = () => {
    setCompany(!company);
  };

  return (
    <div className="menu-background">
      <div className="menu-container">
        <div className="menu-links">
          <span className="link" onClick={toggleFeatures}>
            Features
            <img
              className="arrow"
              src={features ? ArrowUp : ArrowDown}
              alt=""
            />
            {features && (
              <ul>
                <li>Todo List</li>
                <li>Calender</li>
                <li>Reminders</li>
                <li>Planning</li>
              </ul>
            )}
          </span>
          <span className="link" onClick={toggleCompany}>
            Company
            <img className="arrow" src={company ? ArrowUp : ArrowDown} alt="" />
          </span>
          {company && (
            <ul>
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          )}
          <span className="link">Careers</span>
          <span className="link">About</span>
        </div>
        <div className="menu-login">
          <span className="link">Login</span>
          <button className="register">Register</button>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
