import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const ToDoDetails = ({ onClose, show }) => {
  return (
    <div>
      {" "}
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
          <Modal.Title>To-do details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <Col sm={8}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Task Title</Form.Label>
                    <Form.Control type="textarea" disabled />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control
                      type="textarea"
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus sem amet diam. Id praesent sit faucibus cursus euismod dolor vitae. Feugiat nibh ut aliquam orci id sed pretium elementum. Sed ac nunc amet, mattis gravida metus."
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Sub-Task</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Play 1st round Chess with Messi"
                    />
                  </Form.Group>
                </Col>

                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Task Countdown Timer</Form.Label>
                    <Form.Control type="text" placeholder="12:05pm" disabled />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control type="text" placeholder="1:30pm" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control type="text" placeholder="None" />
                  </Form.Group>
                </Col>

                <Modal.Footer>
                  <Button
                    variant="secondary"
                    type="submit"
                    style={{
                      backgroundColor: "#053858",
                      borderRadius: "30px",
                      width: "144px",
                    }}
                  >
                    Delete task
                  </Button>

                  <Button
                    variant="secondary"
                    type="submit"
                    style={{
                      backgroundColor: "#053858",
                      borderRadius: "30px",
                      width: "144px",
                    }}
                  >
                    Add Sub-task
                  </Button>
                </Modal.Footer>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ToDoDetails;
