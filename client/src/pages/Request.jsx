import React from "react";
import { useState } from "react";

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
    event.preventDefault();
    let { name, value } = event.target;
    setRequest((state) => ({ ...state, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendRequest();
  }

  async function sendRequest() {
    // POST request into database
    console.log("hello");

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
    if (event.target.id === "categoryOne") {
      setRequest((state) => ({ ...state, category_id: 1 }));
    } else if (event.target.id === "categoryTwo") {
      setRequest((state) => ({ ...state, category_id: 2 }));
    } else {
      setRequest((state) => ({ ...state, category_id: 3 }));
    }
  }

  return (
    <>
      <div>Make a new job request</div>
      <div>
        <form onSubmit={handleSubmit}>
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

            <form>
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
            </form>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
      {/* <div> {request.service_name}</div>
      <div> {request.service_description}</div>
      <div> {request.date}</div>
      <div> {request.time_required}</div>
      <div> {request.points}</div>
      <div> {request.category_id}</div> */}
    </>
  );
}
