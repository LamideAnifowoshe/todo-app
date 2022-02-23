import React from "react";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalDialog from "react-bootstrap/ModalDialog";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AddToDo = ({ onClose, onShow, show, onAdd }) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");

  return (
    <div>
      <Modal
        show={show}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Play Chess with Messi"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="12:05pm"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />

              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="1:30pm"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Show the football GOAT whuz da boss"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ height: "100px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Sub-Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Play 1st round Chess with Messi"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Sub-Task Duration</Form.Label>
              <Form.Control type="text" placeholder="None" /> value={time}
              onChange={(e) => setTime(e.target.value)}
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Sub-task
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onAdd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddToDo;
