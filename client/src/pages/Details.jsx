import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Details() {
  const [jobDetails, setJobDetails] = useState({});
  const [loggedinUser, setLoggedinUser] = useState({});
  const [creator, setCreator] = useState({});
  const [assigned, setAssigned] = useState(false);
  const { id } = useParams();

  // Formatting my date:
  function formatDate(date) {
    let month = date.getMonth();
    if (month.toString().length < 2) month = "0" + month;

    const year = date.getFullYear();
    const dateString = `${date.getDate()}.${month}.${year}`;
    return dateString;
  }
  const date = new Date();
  const formattedDate = formatDate(date);
  console.log(formattedDate);

  useEffect(() => {
    getDetails();
    getCreator();
    getLoggedinUser();
  }, []);

  useEffect(() => {
    getDetails();
  }, [jobDetails.assigned_to]);

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
    }
    setJobDetails((state) => ({
      ...state,
      ["assigned_to"]: loggedinUser.id,
    }));
  };

  const getCreator = async () => {
    try {
      const response = await fetch(`/api/services/details/${id}/creator`, {
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setCreator(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getLoggedinUser = async () => {
    try {
      const response = await fetch(`/api/services/user`, {
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();

      setLoggedinUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  function handleClick(event) {
    event.preventDefault();
    assignJob();
    setAssigned(true);
  }

  return (
    <div className=" pt-5 pb-3">
      <Container>
        <Row className="m-5 justify-content-md-center">
          <Col xs={12} md={6}>
            <div className="welcome-title josefin-sans-400">
              {jobDetails.service_name}

              <hr />
            </div>
            <div className="josefin-sans-300 mt-4">
              <strong>Request made by: </strong>
              {creator.firstname && creator.lastname ? (
                <span>
                  {creator.firstname} {creator.lastname}{" "}
                </span>
              ) : (
                <span>
                  <em>Unknown user</em>
                </span>
              )}
            </div>
            {jobDetails.assigned_to ? (
              <span className="josefin-sans-300 mt-4">
                <strong>Job status: </strong>
                already assigned
              </span>
            ) : (
              <span className="josefin-sans-300 ">
                <strong>Job status: </strong>
                available
              </span>
            )}
            {/* <div className="josefin-sans-300 ">
              <em>
                <strong>You are:</strong> {loggedinUser.id} /{" "}
                {loggedinUser.firstname} {loggedinUser.lastname}
              </em>
            </div> */}
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col className=" ">
            <Card className="mb-4">
              <Card.Body>
                <Card.Text className="m  josefin-sans-400 fs-5">
                  <div> Service Description</div>
                </Card.Text>
                <Card.Text className="mt-2  josefin-sans-300">
                  <div> {jobDetails.service_description}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text className="m  josefin-sans-400 fs-5">
                  <div className="m  josefin-sans-400 fs-5">Service Date</div>
                  <div className="mt-2  josefin-sans-300">{formattedDate}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text className="m  josefin-sans-400 fs-5">
                  <div className="m  josefin-sans-400 fs-5">
                    Length of service
                  </div>
                  <div className="mt-2  josefin-sans-300">
                    {jobDetails.time_required} hours
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text className="m  josefin-sans-400 fs-5">
                  <div className="m  josefin-sans-400 fs-5">
                    Points Available
                  </div>
                  <div className="mt-2  josefin-sans-300">
                    {jobDetails.points}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button
          className="button josefin-sans-400 mt-2"
          onClick={handleClick}
          disabled={
            jobDetails.assigned_to !== null || creator.id === loggedinUser.id
              ? true
              : false
          }
        >
          Accept Job
        </Button>

        {creator.id === loggedinUser.id ? (

          <div className="josefin-sans-300 mt-2 mb-4">
            <strong>You cannot accept your own job assignment!</strong>
          </div>
        ) : (
          ""
        )}
        {assigned === true ? (
          <div className="josefin-sans-300 mt-2 mb-4">
            <strong>You've been assigned this job!</strong>
          </div>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}
