import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Request() {
  const [request, setRequest] = useState({
    service_name: "",
    service_description: "",
    date: "2024-01-01",
    time_required: 0,
    points: 1,
    category_id: 0,
  });

  // When the input in the form changes, my state is updated
  function handleChange(event) {
    let { name, value } = event.target;
    setRequest((state) => ({ ...state, [name]: value }));
  }

  // When the form is submitted, the function to send the request to the backend gets called
  function handleSubmit(event) {
    event.preventDefault();
    sendRequest();
  }

  // SEND my request to the backend
  async function sendRequest() {
    // POST request into database
    try {
      const response = await fetch(`/api/index/service`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });
      console.log("New job request was submitted!");
    } catch (err) {
      console.log(err.message);
    }
  }

  //

  return (
    <>
      <Container>
        <Row className="justify-content-md-center josefin-sans-300">
          <Col xs lg="6">
            <div className="sacramento-regular request-title">
              New job request
            </div>
            <div>
              Please fill in the form according to your request.
              <br />
              Submit and send your request to Marketplace.
              <hr />
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Job name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name="service_name"
                  value={request.service_name}
                  onChange={handleChange}
                  className="josefin-sans-300"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Job description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="service_description"
                  value={request.service_description}
                  onChange={handleChange}
                  className="josefin-sans-300"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Date of fulfillment:</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={request.date}
                  onChange={handleChange}
                  className="josefin-sans-300"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Duration (in hours):</Form.Label>
                <Form.Control
                  type="number"
                  name="time_required"
                  value={request.time_required}
                  onChange={handleChange}
                  className="josefin-sans-300"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Points:</Form.Label>
                <Form.Control
                  type="number"
                  name="points"
                  min="1"
                  value={request.points}
                  onChange={handleChange}
                  className="josefin-sans-300"
                />
              </Form.Group>
              <Form.Label>Job category:</Form.Label>
              <Form.Select
                aria-label="Categories"
                name="category_id"
                onChange={handleChange}
                value={request.category_id}
                className="josefin-sans-300"
              >
                <option>Choose job category</option>
                <option type="radio" value="1">
                  Household
                </option>
                <option type="radio" value="2">
                  Social
                </option>
                <option type="radio" value="3">
                  Tech assistance
                </option>
              </Form.Select>
              <Button className="button mt-3" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
