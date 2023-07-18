import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" href="/">
            Portafolio de react
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div
            className="justify-content-end collapse navbar-collapse "
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  to="/traffic-light"
                >
                  Traffic Light
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/todo-list">
                  Todo list
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
