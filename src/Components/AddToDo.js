import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AddToDo = ({ onClose, onShow, show, onAdd }) => {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [activity, setActivity] = useState("");
  const [subactivity, setSubActivity] = useState("");
  const [duration, setDuration] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      alert("Please add a task");
      return;
    }

    onAdd({ date, start, end, activity, subactivity, duration });

    setDate("");
    setStart("");
    setEnd("");
    setActivity("");
    setSubActivity("");
    setDuration("");
  };

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
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Play Chess with Messi"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="12:05pm"
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="1:30pm"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Show the football GOAT whuz da boss"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                style={{ height: "100px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Sub-Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Play 1st round Chess with Messi"
                value={subactivity}
                onChange={(e) => setSubActivity(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Sub-Task Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="None"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary">Add Sub-task</Button>
            <Modal.Footer>
              <Button variant="secondary" type="submit" onClick={onSubmit}>
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddToDo;
