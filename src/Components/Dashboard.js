import React from "react";
import ToDo from "./ToDo";
import SideNav from "./SideNav";
import NewToDo from "./NewToDo";

const Dashboard = ({ todos, onAdd, onToggle, todo, onDelete }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <h5 className="ps-4">No Task Available</h5>
      ) : (
        <h5 className="ps-4">Here Are Your Tasks For Today</h5>
      )}

      <ToDo todos={todos} onToggle={onToggle} todo={todo} onDelete={onDelete} />
    </div>
  );
};

export default Dashboard;
