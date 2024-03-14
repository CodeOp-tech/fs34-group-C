import React, { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Request() {
  // Creating todays date for the date input field min-value
  function yyyymmdd(dateIn) {
    let yyyy = dateIn.getFullYear();

    let mm = dateIn.getMonth() + 1; // getMonth() is zero-based
    if (mm < 10) {
      mm = "0" + mm;
    }
    let dd = dateIn.getDate();
    return String(`${yyyy}-${mm}-${dd}`); // Leading zeros for mm and dd
  }
  var today = new Date();
  let date = yyyymmdd(today);

  // Creating a request state to send to the backend as new request
  const [request, setRequest] = useState({
    service_name: "",
    service_description: "",
    date: date,
    time_required: 0,
    points: 1,
    category_id: 0,
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  // Storing my categories from the database in my file
  const getCategories = async () => {
    try {
      const response = await fetch(`/api/index/categories`, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response);
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

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
          authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(request),
      });
      alert("New job submitted");
      console.log("New job request was submitted!");
    } catch (err) {
      console.log(err.message);
    }
  }

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
                  min="2024-03-14"
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
                name="category_id"
                id="category"
                className="josefin-sans-300"
                value={request.category_id}
                onChange={handleChange}
              >
                <option placeholder="choose Job Category">
                  Select Job Category
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category_name}
                  </option>
                ))}
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
