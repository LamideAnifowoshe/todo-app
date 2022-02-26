import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import AddToDo from "./AddToDo";

const NewToDo = ({ onAdd, onSub }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        as="input"
        type="submit"
        value="Create a new todo"
        onClick={handleShow}
        style={{
          backgroundColor: "#053858",
          color: "white",
          float: "right",
          borderRadius: "30px",
          width: "283px",
          height: "59.89px",
        }}
      />

      <AddToDo
        onClose={handleClose}
        onShow={handleShow}
        show={show}
        onAdd={onAdd}
        onSub={onSub}
      />
    </div>
  );
};

export default NewToDo;
