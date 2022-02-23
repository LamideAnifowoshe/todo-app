import React from "react";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Dashboard";
import { useState } from "react";

const addToDo = (id) => {
  console.log("add", id);
};

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      date: "14 Nov",
      activity: "Play Chess with Messi",
      subactivity: "Show the football GOAT whuz da boss",
      start: "12:51pm",
      end: "1:30pm",
      duration: "39 mins",
    },

    {
      id: 1,
      date: "02 Dec",
      activity: "Go Skydiving with Kal-el",
      subactivity: "Who's more fly? Me! That's who",
      start: "5:50pm",
      end: "6:00pm",
      duration: "10 mins",
    },

    {
      id: 2,
      date: "08 Dec",
      activity: "Visit Mum",
      subactivity: "Order flight tickets to California",
      start: "08:00pm",
      end: "11:00pm",
      duration: "03 hrs",
    },

    {
      id: 3,
      date: "25 Dec",
      activity: "Christmas at Sue's prepare",
      subactivity: "Christmas gifts and wrappers",
      start: "10:30am",
      end: "12:00pm",
      duration: "1hr 30mins",
    },
  ]);

  return (
    <div>
      <NavBar />
      <Dashboard todos={todos} onAdd={addToDo} />
    </div>
  );
}

export default App;
