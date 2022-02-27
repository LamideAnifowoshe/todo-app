import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AddToDo = ({ onClose, onShow, show, onAdd }) => {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [activity, setActivity] = useState("");
  const [subactivity, setSubActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [formValues, setFormValues] = useState([{ sub: ""}])

  const onSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      alert("Please add a task");
      return;
    }

    const subActivities = formValues.map((item) => {
      return {
        activity: item.sub
      }
    })

    onAdd({ date, start, end, activity, subActivities, duration });

    setDate("");
    setStart("");
    setEnd("");
    setActivity("");
    setSubActivity("");
    setFormValues([{ sub: ""}])
    setDuration("");
  };

  const addSubTaskField = () => {
    return setFormValues([...formValues, {sub: ""}])
  }

  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

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
          <Container>
            <Form onSubmit={onSubmit}>
              <Row>
                <Col sm={8}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Play Chess with Messi"
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

                  <div>
                  {
                    formValues.map((form, index) => {
                      return (
                        <Form.Group key={index}>
                        <Form.Label>Sub-Task</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Play 1st round Chess with Messi"
                        value={form.sub || ""}
                        name="sub"
                        onChange={e => handleChange(index, e)}
                        />
                        </Form.Group>
                      )
                    })
                  }
                  </div>
                  <Button
                  onClick={() => addSubTaskField()}
                    variant="primary"
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderColor: "#053858",
                      color: "#053858",
                      boxSizing: "border-box",
                      borderRadius: "30px",
                      width: "204px",
                    }}
                  >
                    Add Sub-task
                  </Button>
                </Col>

                <Col sm={2}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="12:05pm"
                      value={start}
                      onChange={(e) => setStart(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col sm={2}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="1:30pm"
                      value={end}
                      onChange={(e) => setEnd(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Duration</Form.Label>
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
                    onClick={onSubmit}
                    style={{
                      backgroundColor: "#053858",
                      borderRadius: "30px",
                      width: "144px",
                    }}
                  >
                    Save
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

export default AddToDo;
