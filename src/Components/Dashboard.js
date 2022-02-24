import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToDo from "./ToDo";
import SideNav from "./SideNav";
import NewToDo from "./NewToDo";

const Dashboard = ({ todos, onAdd }) => {
  return (
    <div>
      <h5 className="ps-4">Here Are Your Tasks For Today</h5>
      <ToDo todos={todos} />
    </div>
  );
};

export default Dashboard;
