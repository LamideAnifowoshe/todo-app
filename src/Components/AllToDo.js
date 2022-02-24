import React from "react";
import ToDo from "./ToDo";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import PastTasks from "./PastTasks";

const AllToDo = ({ todos }) => {
  return (
    <div>
      <Tab.Container defaultActiveKey="first">
        <Nav
          variant="pills"
          className="flex-column"
          n
          style={{
            marginTop: "263px",
            width: "20%",
            backgroundColor: "#053858 !important",
          }}
        >
          <Nav.Item>
            <Nav.Link eventKey="first">Upcoming Tasks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">PastTasks</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <ToDo todos={todos} />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <PastTasks />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default AllToDo;
