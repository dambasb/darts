import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PublicHomeScreen from "./public/PublicHomeScreen";
import TeamHomeScreen from "./team/TeamHomeScreen";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PublicHomeScreen />} />
        <Route path="team" element={<TeamHomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
