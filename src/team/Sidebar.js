import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const logoUrl =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kortegaard.co.uk%2Fwp-content%2Fuploads%2F2020%2F06%2Fbest-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png&f=1&nofb=1";

  return (
    <div className="sidebar">
      <div className="sidebar__team">
        <img src={logoUrl} alt="logo" className="sidebar__logo" />
        <p className="sidebar__user">PK Felga</p>
      </div>
      <div className="sidebar__team">
        <img src={logoUrl} alt="logo" className="sidebar__logo" />
        <p className="sidebar__user">Damir Kolobaric</p>
      </div>
      <div className="sidebar__navigation">
        <ul>
          <li>Home</li>
          <li>News</li>
          <li>Training</li>
          <li>Admin</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
