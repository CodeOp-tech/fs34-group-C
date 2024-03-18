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
  const category = searchParams.get("category");
  const [servicesByCat, setServicesByCat] = useState([]);

  useEffect(() => {
    getJobsByCategory();
  }, []);

  // get All Jobs listed under a certain Category Id (which is given to me by usesearchParams)
  const getJobsByCategory = async () => {
    try {
      const response = await fetch(`api/index/services?category=${category}`);
      const data = await response.json();
      setServicesByCat(data);
    } catch (err) {
      console.log(err);
    }
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

        <Form className="mb-4 josefin-sans-300">
          <Row className="justify-content-center">
            <Col xs={6} md={3}>
              <Form.Group>
                <Form.Label>
                  <strong>Filter by </strong>
                </Form.Label>
              </Form.Group>
            </Col>
            <Col xs={6} md={3}>
              <Form.Group></Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={6} md={3}>
              <Form.Group>
                <Form.Label>Points</Form.Label>
                <Form.Select
                  name="points"
                  id="points"
                  className="josefin-sans-300"
                  value={servicesByCat.points}
                  // onChange={handleChange}
                >
                  <option placeholder="points">Min amount of points</option>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50+</option>
                  <option>100+</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6} md={3}>
              <Form.Group>
                <Form.Label>Duration</Form.Label>
                <Form.Select
                  name="time_required"
                  id="time_required"
                  className="josefin-sans-300"
                  value={servicesByCat.time_required}
                  // onChange={handleChange}
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
          </Row>
        </Form>
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
                  <Card.Text>Points to earn: {service.points}</Card.Text>
                  <Card.Text className="overflow">
                    {service.service_description}
                  </Card.Text>
                  <Button
                    className="button josefin-sans-400 mt-2"
                    href="/Details"
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
