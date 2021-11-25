import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

import Common from "./components/Common";

function App() {
  return (
    <div className="App">
      <Common />
      <div className="Route-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
