import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  return (
    <div>
      <div className="list-group-flush ps-4" id="sidenav">
        <a href="/" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faBell} /> Dashboard
        </a>

        <a href="/" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faBell} /> All To-Dos
        </a>

        <a href="/" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faBell} /> Profile
        </a>

        <a href="/" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faBell} /> Settings
        </a>
      </div>
    </div>
  );
};

export default SideNav;
