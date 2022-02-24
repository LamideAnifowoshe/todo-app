import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <div className="list-group-flush ps-4" id="sidenav">
        <Link to="/" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faThLarge} /> Dashboard
        </Link>

        <Link to="/AllToDo" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faTasks} /> All To-Dos
        </Link>

        <Link to="/Profile" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faUser} /> Profile
        </Link>

        <Link to="/Settings" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faCog} /> Settings
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
