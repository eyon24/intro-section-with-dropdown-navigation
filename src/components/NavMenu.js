import { useState } from "react";
import ArrowDown from "../images/icon-arrow-down.svg";
import ArrowUp from "../images/icon-arrow-up.svg";
import TodoIcon from "../images/icon-todo.svg";
import CalenderIcon from "../images/icon-calendar.svg";
import ReminderIcon from "../images/icon-reminders.svg";
import PlanningIcon from "../images/icon-planning.svg";

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
          </span>
          <ul className={features ? "features" : "hide"}>
            <li>
              <img src={TodoIcon} alt="" /> Todo List
            </li>
            <li>
              <img src={CalenderIcon} alt="" /> Calender
            </li>
            <li>
              <img src={ReminderIcon} alt="" /> Reminders
            </li>
            <li>
              <img src={PlanningIcon} alt="" /> Planning
            </li>
          </ul>

          <span className="link" onClick={toggleCompany}>
            Company
            <img className="arrow" src={company ? ArrowUp : ArrowDown} alt="" />
          </span>
          <ul className={company ? "company" : "hide"}>
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
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
