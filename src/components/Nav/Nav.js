import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" className="transaction-title">
        {" "}
        Budgter{" "}
      </Link>
      <button className="navbar-button">
        <Link to="/add" className="navbar-new-transaction">
          {" "}
          Add{" "}
        </Link>
      </button>
    </nav>
  );
}

export default Nav;
