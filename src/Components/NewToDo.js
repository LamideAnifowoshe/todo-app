import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalDialog from "react-bootstrap/ModalDialog";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const NewToDo = () => {
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

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              backgroundColor: "#053858",
              color: "white",
              height: "49px",
              width: "100%",
              position: "absolute",
              left: "0px",
            }}
          >
            Create New Task
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Task Title</Form.Label>
              <Form.Control type="text" placeholder="Play Chess with Messi" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="message"
                placeholder="Show the football GOAT whuz da boss"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewToDo;
