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
      const response = await fetch(`api/index/details/${id}`, {
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      console.log(data)
      setJobDetails(data);
    } catch (err) {
      console.log(err);
    }
  };
console.log(jobDetails);

  return (
  <div>
  <div className="sacramento-regular welcome-title justify-content-md-center">
              Details
            </div>
            <Container>
            <Row>
          <Col className="profile-container">
            <h3 className="m"></h3>
            <h5 className="mt-2">
              { id }
              {jobDetails.service_name}
            </h5>

          </Col>
        </Row>
        </Container>
    </div>
  );
}
