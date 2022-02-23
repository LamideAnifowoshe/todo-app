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
            <th></th>
            <th></th>
            <th> Start Time</th>
            <th> End Time</th>
            <th> Duration</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              {todos.map((todo) => (
                <h3 key={todo.id}>{todo.date}</h3>
              ))}
            </td>
            <td>
              {todos.map((todo) => (
                <p key={todo.id}>{todo.activity}</p>
              ))}
            </td>
            <td>
              {todos.map((todo) => (
                <h6 key={todo.id}>{todo.start}</h6>
              ))}
            </td>
            <td>
              {todos.map((todo) => (
                <h6 key={todo.id}>{todo.end}</h6>
              ))}
            </td>
            <td>
              {todos.map((todo) => (
                <h6 key={todo.id}>{todo.date}</h6>
              ))}
            </td>
            <td>
              {todos.map((todo) => (
                <h6>
                  <FontAwesomeIcon key={todo.id} icon={faEllipsisH} />
                </h6>
              ))}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ToDo;
