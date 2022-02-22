import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import ToDos from "./ToDos";

const SideNav = () => {
  return (
    <div>
      <Container fluid={true}>
        <Row noGutters={true}>
          <Col sm={2}>
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
          </Col>

          <Col sm={10}>
            <Header />
            <ToDos />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SideNav;
