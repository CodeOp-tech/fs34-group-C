import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Image,
  Form,
} from "react-bootstrap";

import "../App.css";
import { useSearchParams, Link } from "react-router-dom";

export default function Jobs() {
  const [searchParams, setSearchParams] = useSearchParams();

  // variable that gets defined via the search params in the url
  const category = searchParams.get("category");

  // useState for sending data from fetch request to front end
  const [servicesByCat, setServicesByCat] = useState([]);

  // useState for Input that gets defined by filter
  const [input, setInput] = useState({
    points: "",
    time_required: "",
  });

  useEffect(() => {
    getJobsByCategory();
  }, []);

  // get All Jobs listed under a certain Category Id (which is given to me by usesearchParams)
  const getJobsByCategory = async () => {
    console.log(input.points);
    console.log(input.time_required);
    console.log(category);
    try {
      const response = await fetch(
        `/api/index/services?category=${category}&points=${input.points}&time_required=${input.time_required}`,
        {
          method: "GET",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setServicesByCat(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    if (event.target.value !== "") {
      setInput((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
    getJobsByCategory();
  };

  const reset = () => {
    setInput({
      points: "",
      time_required: "",
    });
  };

  return (
    <div className="profile pt-5 pb-3">
      <Container>
        <Row className="m-5 justify-content-md-center">
          <Col xs={12} md={6}>
            <div className="welcome-title justify-content-md-center josefin-sans-400">
              Market
            </div>
            <hr />
            <div className="josefin-sans-300 mt-4">
              Browse through the listed service requests and find a match!
              Please make sure to check your availability with the listed hiring
              date. Once you accept a job, it will automatically be assigned to
              you and a new Chat will appear in your Chatbox.
            </div>
          </Col>
        </Row>
        {/* ******************************************************************************************************** */}
        <Form className="mb-4 josefin-sans-300" onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col xs={6} md={2}>
              <Form.Group>
                <Form.Label>
                  <strong>Filter by </strong>
                </Form.Label>
              </Form.Group>
            </Col>
            <Col xs={6} md={3}>
              <Form.Group></Form.Group>
            </Col>
            <Col xs={6} md={3}>
              <Form.Group></Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={6} md={3}>
              <Form.Group>
                {/* <Form.Label>Points</Form.Label> */}
                <Form.Select
                  name="points"
                  id="points"
                  className="josefin-sans-300"
                  value={input.points}
                  onChange={handleChange}
                >
                  <option placeholder="points">Min amount of points</option>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50</option>
                  <option>100</option>
                  <option>200</option>
                </Form.Select>
              </Form.Group>
            </Col>
            {/* ******************************************************************* */}

            <Col xs={6} md={3} className="">
              <Form.Group>
                {/* <Form.Label>Duration</Form.Label> */}
                <Form.Select
                  name="time_required"
                  id="time_required"
                  className="josefin-sans-300"
                  value={input.time_required}
                  onChange={handleChange}
                >
                  <option placeholder="time_required">
                    Max amount of duration
                  </option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>3 hours</option>
                  <option>4 hours</option>
                  <option>5 hours</option>
                  <option>10 hours</option>
                </Form.Select>
              </Form.Group>
            </Col>
            {/* ******************************************************************* */}

            <Col xs={6} md={2}>
              {/* <Form.Label></Form.Label> */}
              <Button
                type="submit"
                className="filter-button josefin-sans-400 mt-2"
              >
                Filter
              </Button>
            </Col>
            {/* ******************************************************************* */}
            <Col xs={6} md={1}>
              {/* <Form.Label></Form.Label> */}
              <Button
                type="submit"
                className="filter-button josefin-sans-400 mt-2"
                onClick={reset}
              >
                Reset
              </Button>
            </Col>

            {/* ******************************************************************* */}
          </Row>
        </Form>
        {/* ******************************************************************************************************** */}

        {/* Mapping through all my Jobs per given Category and displaying info about them */}
        <Row className="mr-5 ml-5 justify-content-md-center ">
          {servicesByCat.map((service) => (
            <Col className="josefin-sans-300 col-3" key={service.id}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{service.service_name}</Card.Title>

                  <Card.Text>
                    Date of fulfillment:{" "}
                    {`${service.date.substr(8, 2)}.${service.date.substr(
                      5,
                      2
                    )}.${service.date.substr(0, 4)}`}
                  </Card.Text>
                  <Card.Text>Duration: {service.time_required} hours</Card.Text>
                  <Card.Text>Points to earn: {service.points}</Card.Text>
                  <Card.Text className="overflow">
                    <em> {service.service_description}</em>
                  </Card.Text>

                  <Link to={`/jobs/${service.id}`}>
                    <Button className="button josefin-sans-400 mt-2">
                      Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
