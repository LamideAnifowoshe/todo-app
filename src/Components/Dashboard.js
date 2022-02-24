import React from "react";
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
