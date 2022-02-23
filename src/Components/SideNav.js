import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  return (
    <div>
      <div className="list-group-flush ps-4" id="sidenav">
        <a href="/" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faThLarge} /> Dashboard
        </a>

        <a href="/" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faTasks} /> All To-Dos
        </a>

        <a href="/" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faUser} /> Profile
        </a>

        <a href="/" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faCog} /> Settings
        </a>
      </div>
    </div>
  );
};

export default SideNav;
