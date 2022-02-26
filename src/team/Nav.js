import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  };
  return (
    <div className="nav">
      <ul className="nav__bar">
        <li className="nav__item">
          <div
            onClick={toggleSidebar}
            className={`nav__hamburger ${!showSidebar && "is-active"}`}
          >
            <span className="nav__hamburgerLine"></span>
            <span className="nav__hamburgerLine"></span>
            <span className="nav__hamburgerLine"></span>
          </div>
        </li>
        <li className="nav__item">Home</li>
        <li className="nav__item">Contact</li>
      </ul>
    </div>
  );
}

export default Nav;
