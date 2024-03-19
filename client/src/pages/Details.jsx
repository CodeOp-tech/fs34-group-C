import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button, Image } from "react-bootstrap";


export default function Details() {
  const [jobDetails, setJobDetails] = useState({});
  // const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams()

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await fetch(`/api/services/details/${id}`, {
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setJobDetails(data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
  <div>
  <div className="welcome-title josefin-sans-400">
  {jobDetails.service_name}
            </div>
            <p className="josefin-sans-300 mt-4 mb-4">Request made by {jobDetails.service_creator}</p>
            <Container>
            <Row>
          <Col className="profile-container">
            <h3 className="m">Service Description</h3>
            <h6 className="mt-2">
              {jobDetails.service_description}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col className="profile-container">
            <h3 className="m">Date and Time</h3>
            <h6 className="mt-2">
              {jobDetails.date}
            </h6>
          </Col>
          <Col className="profile-container">
            <h3 className="m">Length of service</h3>
            <h6 className="mt-2">
              {jobDetails.time_required} hours
            </h6>
          </Col>
          <Col className="profile-container">
            <h3 className="m">Points Available</h3>
            <h6 className="mt-2">
              {jobDetails.points}
            </h6>
          </Col>
        </Row>
        </Container>

        <Button
                    className="button josefin-sans-400 mt-2">
                    Accept Job
                  </Button>
    </div>
  );
}
