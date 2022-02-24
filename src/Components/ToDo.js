import React from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ todos }) => {
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
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>
                <h3>{todo.date}</h3>
              </td>
              <td>
                <p>{todo.activity}</p>
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
                  <FontAwesomeIcon icon={faEllipsisH} />
                </h6>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ToDo;
