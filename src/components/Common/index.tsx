import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import "./Common.css";

const Common: React.FC = () => {
  return (
    <nav className="Common-nav">
      <Link className="Common-nav-link" to="/">
        <Button buttonCTA="Go to Home" />
      </Link>
      <Link className="Common-nav-link" to="button">
        <Button buttonCTA="Go to Button" />
      </Link>
      <Link className="Common-nav-link" to="input">
        <Button buttonCTA="Go to Input" />
      </Link>
    </nav>
  );
};

export default Common;
