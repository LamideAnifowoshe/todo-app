import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const ToDoDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Form onSubmit={onSubmit}>
              <Row>
                <Col sm={8}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Task Title</Form.Label>
                    <Form.Control
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
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
                </Col>

                <Col sm={4}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Task Countdown Timer</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="12:05pm"
                      value={start}
                      onChange={(e) => setStart(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="1:30pm"
                      value={end}
                      onChange={(e) => setEnd(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="None"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Modal.Footer>
                  <Button
                    variant="secondary"
                    type="submit"
                    onClick={onDelete}
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
                    onClick={onSubmit}
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
