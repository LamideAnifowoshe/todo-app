import React from "react";
import Table from "react-bootstrap/Table";

const ToDo = ({ todos }) => {
  return (
    <div>
      <Table borderless className="mt-4">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th> Start Time</th>
            <th> End Time</th>
            <th> Duration</th>
            <th>#</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              {todos.map((todo) => (
                <h6 key={todo.id}>{todo.date}</h6>
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
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ToDo;
