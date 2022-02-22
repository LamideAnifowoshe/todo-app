import React from "react";
import Table from "react-bootstrap/Table";

const ToDos = () => {
  return (
    <div>
      <Table borderless className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>#</th>
            <th> Start Time</th>
            <th> End Time</th>
            <th> Duration</th>
            <th>#</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ToDos;
