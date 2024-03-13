import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      const response = await fetch(`/api/service`, {
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
      <div>Make a new job request</div>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Job name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="service_name"
            value={request.service_name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Job description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="service_description"
            value={request.service_description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Date of fulfillment:</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={request.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Duration (in hours):</Form.Label>
          <Form.Control
            type="number"
            name="time_required"
            value={request.time_required}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Points:</Form.Label>
          <Form.Control
            type="number"
            name="points"
            min="1"
            value={request.points}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Select
          aria-label="Categories"
          name="category_id"
          onChange={handleChange}
          value={request.category_id}
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
        <Button className="button m-2" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
