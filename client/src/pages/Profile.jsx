import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Button, Row, Col, Image } from "react-bootstrap";

export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    total_points: 0,
  });
  const [userServices, setUserServices] = useState({ service_name: "" });

  async function getUserInfo() {
    try {
      const response = await fetch("/api/profile/user", {
        method: "GET",
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });

      const data = await response.json();
      console.log(data);
      setUserInfo(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getUserServices() {
    console.log("this function call works");
    try {
      const response = await fetch("/api/profile/myservices", {
        method: "GET",
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });
      const data = await response.json();
      setUserServices(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUserInfo();
    getUserServices();
  }, []);

  return (
    <div className="profile">
      <h1 className="profile-title text-center pt-5 pb-3">Profile Page</h1>

      <Container className="text-center">
        <Row>
          <Col className="profile-container">
            <h3 className="m">Profile information</h3>
            <div className="image-container rounded-circle"></div>
            <h5 className="mt-2">
              {userInfo.firstname} {userInfo.lastname}
            </h5>
            <p>User email: {userInfo.email}</p>

            <Button className="profile-button m-2">Update Information</Button>
          </Col>
        </Row>
        <Row>
          <Col className="profile-container">
            <h3>My Service Requests</h3>
            <p>Here go all the service requests I've posted</p>
            {/*map through all the service request names, which will show up as links. also want to add in*/}
            <h5 className="mt-2">{userServices.service_name}</h5>

            <Button className="profile-button m-2">
            <Link to={"./pages/Request"}>Create New Request
            </Link>
            </Button>
          </Col>

          <Col className="profile-container">
            <h3>My Assigned Services</h3>
            <p>Here are all my upcoming jobs</p>
            {/*map through all the upcoming job names, which will show up as links*/}
            <Button className="profile-button m-2">
              View Job Marketplace
              </Button>
          </Col>
        </Row>
        <Row>
          <Col className="profile-container">
            <h3>Points</h3>
            <p>Here is your current point score:</p>
            <h4>{userInfo.total_points}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}