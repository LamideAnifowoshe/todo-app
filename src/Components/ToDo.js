import React from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import ToDoDetails from "./ToDoDetails";

const ToDo = ({ todos, onToggle, onDelete, todo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    onToggle(id);
  };
  return (
    <div>
      <Table borderless responsive>
        <thead>
          <tr>
            <th> Date</th>
            <th> Activity</th>
            <th> Start Time</th>
            <th> End Time</th>
            <th> Duration</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>
                <h3>{todo.date}</h3>
              </td>
              <td>
                <div>
                  <p>{todo.activity}</p>
                </div>
                <div>
                  {todo.subActivities &&
                    todo.subActivities.map((item, index) => (
                      <div key={index}>{item.activity}</div>
                    ))}
                </div>
              </td>
              <td>
                <h6>{todo.start}</h6>
              </td>
              <td>
                <h6>{todo.end}</h6>
              </td>
              <td>
                <h6>{todo.duration}</h6>
              </td>
              <td>
                <h6>
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    onClick={() => handleShow(todo.id)}
                  />
                </h6>
              </td>
              <td>
                <h6>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => onDelete(todo.id)}
                  />
                </h6>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToDoDetails
        onClose={handleClose}
        onShow={handleShow}
        show={show}
        onDelete={onDelete}
      />
    </div>
  );
};

export default ToDo;
