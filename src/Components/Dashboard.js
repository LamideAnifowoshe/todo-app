import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToDo from "./ToDo";
import SideNav from "./SideNav";

const Dashboard = ({ todos }) => {
  return (
    <div>
      <Container fluid={true}>
        <Row>
          <Col sm={2}>
            <SideNav />
          </Col>
          <Col sm={10}>
            <h5 className="ps-4">Here Are Your Tasks For Today</h5>
            <ToDo todos={todos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
