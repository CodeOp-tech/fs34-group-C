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
      const response = await fetch(`api/index/services?category=${category}`, {
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setServicesByCat(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <Row className="mt-5 mr-5 ml-5 justify-content-md-center ">
          <Col xs={12} md={6}>
            <div className="sacramento-regular welcome-title justify-content-md-center">
              Marketplace
            </div>
            <hr />
            <div className="josefin-sans-300 mt-4 mb-4">
              Browse through the listed service requests and find a match!
              Please make sure to check your availability with the listed hiring
              date. Once you accept a job, it will automatically be assigned to
              you and a new Chat will appear in your Chatbox.
            </div>
          </Col>
        </Row>

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

                  <Link to={`/jobs/${service.id}`}>
                  <Button
                    className="button josefin-sans-400 mt-2">
                    Details
                  </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
