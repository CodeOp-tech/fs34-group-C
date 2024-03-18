import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Image } from "react-bootstrap";

export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    total_points: 0,
  });
  const [userServices, setUserServices] = useState([]);
  const [userJobs, setUserJobs] = useState([]);

  //getting all of the user information from the database
  async function getUserInfo() {
    try {
      const response = await fetch("/api/profile/user", {
        method: "GET",
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });
      const data = await response.json();
      setUserInfo(data);
    } catch (err) {
      console.log(err);
    }
  }

  //getting all of the service requests the user has made 
  async function getUserServices() {
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
  };

   //getting all of the jobs the user is assigned to 
  async function getUserJobs() {
    try {
      const response = await fetch("/api/profile/myjobs", {
        method: "GET",
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      });
      const data = await response.json();
      setUserJobs(data);
    } catch (err) {
      console.log(err);
    }
  }


  //ensuring we see something when we click on the page
  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
   getUserServices();
  }, []);

  //button functions
  const navigate = useNavigate();
  const handleRequestClick = () => navigate("/Request");
  const handleJobsClick = () => navigate("/Categories");

  return (
    <div className="profile">
      <h1 className="profile-title text-center pt-5 pb-3">Profile Page</h1>

      <Container className="text-center pb-5">
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
            <p>Upcoming service requests</p>
            {userServices.map((userService, i) => (
              <h5 className="mt-2" key={i}>
                {userService.service_name}
              </h5>
            ))}

            <Button className="profile-button m-2" onClick={handleRequestClick}>
            Create New Request
            </Button>
          </Col>


          <Col className="profile-container">
            <h3>My Assigned Services</h3>
            <p>Upcoming jobs</p>
            {userJobs.map((userJob, i) => (
              <h5 className="mt-2" key={i}>
                {userJob.service_name}
              </h5>
            ))}
            <Button className="profile-button m-2" onClick={handleJobsClick}>
              View Job Marketplace
              </Button>
          </Col>
        </Row>
        <Row>
          <Col className="profile-container">
            <h3>Points</h3>
            <p>Here is your current point score:</p>
            <h4>{userInfo.total_points}</h4>
            <Button className="profile-button m-2">
              Get Rewards
              </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}