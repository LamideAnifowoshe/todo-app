import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";

const PastTasks = () => {
  const [pasttodos, setPastTodos] = useState([
    {
      id: 0,
      date: "01 Oct",
      activity: "Tutor Rotimi",
      subactivity: "Show the football GOAT whuz da boss",
      start: "12:51pm",
      end: "1:30pm",
      duration: "39 mins",
    },

    {
      id: 1,
      date: "23 Sep",
      activity: "Go Shopping",
      subactivity: "Who's more fly? Me! That's who",
      start: "5:50pm",
      end: "6:00pm",
      duration: "10 mins",
    },

    {
      id: 2,
      date: "08 Sep",
      activity: "Meeting with KO",
      subactivity: "Order flight tickets to California",
      start: "08:00pm",
      end: "11:00pm",
      duration: "03 hrs",
    },

    {
      id: 3,
      date: "02 Aug",
      activity: "Petes Birthday",
      subactivity: "Christmas gifts and wrappers",
      start: "10:30am",
      end: "12:00pm",
      duration: "1hr 30mins",
    },
  ]);

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
          {pasttodos.map((pasttodo) => (
            <tr key={pasttodo.id}>
              <td>
                <h3>{pasttodo.date}</h3>
              </td>
              <td>
                <p>{pasttodo.activity}</p>
              </td>
              <td>
                <h6>{pasttodo.start}</h6>
              </td>
              <td>
                <h6>{pasttodo.end}</h6>
              </td>
              <td>
                <h6>{pasttodo.duration}</h6>
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

export default PastTasks;
