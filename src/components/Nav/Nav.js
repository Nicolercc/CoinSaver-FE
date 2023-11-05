import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ height: "10rem" }}
    >
      <div className="container-fluid mx-5">
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <div className="navbar-brand " style={{ fontSize: "5rem" }}>
            CoinSaver
          </div>
        </Link>
        <div className="d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/form"
                className="btn btn-primary mx-5 "
                style={{ fontSize: "2rem" }}
              >
                New Transactions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
