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

  function handleChange(event) {
    let { name, value } = event.target;
    console.log(name, value);
    setRequest((state) => ({ ...state, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendRequest();
  }

  async function sendRequest() {
    // POST request into database
    // console.log("hello");
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

  function setCategory(event) {
    console.log(event);
    if (event.target.id === "1") {
      setRequest((state) => ({ ...state, category_id: 1 }));
    } else if (event.target.id === "2") {
      setRequest((state) => ({ ...state, category_id: 2 }));
    } else if (event.target.id === "3") {
      setRequest((state) => ({ ...state, category_id: 3 }));
    } else {
      setRequest((state) => ({ ...state, category_id: 4 }));
    }
  }

  return (
    <>
      <div>Make a new job request</div>
      <div>
        {/* <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="service_name">Job name: </label>
            <input
              type="text"
              name="service_name"
              value={request.service_name}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="service_description">Job description: </label>
            <input
              type="text"
              name="service_description"
              value={request.service_description}
              onChange={handleChange}
            ></input>
          </div> 
           <div>
            <label htmlFor="date">Date of fulfillment: </label>
            <input
              type="date"
              name="date"
              value={request.date}
              onChange={handleChange}
            ></input>
          </div> 
          <div>
            <label htmlFor="time_required">Duration (in hours): </label>
            <input
              type="number"
              name="time_required"
              value={request.time_required}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="points">Points: </label>
            <input
              type="number"
              name="points"
              min="1"
              value={request.points}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <div htmlFor="category_id">Job category: </div>
            <input
              type="radio"
              name="category_id"
              id="categoryOne"
              value={request.category_id}
              onClick={setCategory}
            />
            <label htmlFor="categoryOne">Category 1</label> <br />
            <input
              type="radio"
              name="category_id"
              id="categoryTwo"
              value={request.category_id}
              onClick={setCategory}
            ></input>
            <label htmlFor="categoryTwo">Category 2</label>
            <br />
          </div>

          <input type="submit" value="Submit" />
        </form> */}
      </div>
      <div> {request.service_name}</div>
      <div> {request.service_description}</div>
      <div> {request.date}</div>
      <div> {request.time_required}</div>
      <div> {request.points}</div>
      <div> {request.category_id}</div>

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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
