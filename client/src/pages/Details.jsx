import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Details() {
  const [jobDetails, setJobDetails] = useState({});
  const [assigned, setAssigned] = useState(false);
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

  const assignJob = async () => {
    try {
      const response = await fetch(`/api/services/details/${id}/assigned`, {
        method: "POST",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
    } catch (err) {
      console.log(err);
    } setAssigned(true);
    console.log(assigned)
  }

  function handleClick(event) {
    event.preventDefault();
    assignJob()
  };

  return (
  <div>
  <div className="welcome-title josefin-sans-400">
  {jobDetails.service_name}
            </div>
            <p className="josefin-sans-300 mt-4 mb-4">Request made by {jobDetails.service_creator}</p>
            <p className="josefin-sans-300 mt-4 mb-4"> Assigned Status: {assigned === true ? "Already assigned" : "Job available" }</p>
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
            <h3 className="m">Service Date</h3>
            <h6 className="mt-2">
                    {/* {`${jobDetails.date.substr(8, 2)}.${jobDetails.date.substr(
                      5,
                      2
                    )}.${jobDetails.date.substr(0, 4)}`} */}
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
            className="button josefin-sans-400 mt-2" onClick={handleClick} disabled={!assigned ? false : true}>
              Accept Job
        </Button>
    </div>
  );
}
