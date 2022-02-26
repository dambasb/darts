import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import "./TeamHomeScreen.css";

function TeamHomeScreen() {
  return (
    <div className="teamHomeScreen">
      <Sidebar />
      <Nav />
    </div>
  );
}

export default TeamHomeScreen;
