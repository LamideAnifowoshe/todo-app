import React from "react";
import Ellipse from "./Images/Ellipse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
            <li className="nav-item">
              <h4>Jason Blage</h4>
            </li>
          </ul>
          <img src={Ellipse} className="navbar-brand" />
        </div>
      </nav>
      <h1>Good morning, Jason</h1>
    </div>
  );
};

export default NavBar;
