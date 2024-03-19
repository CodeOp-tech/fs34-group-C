import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  }

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
    getUserInfo(); getUserServices(); getUserJobs();
  }, []);

  //button functions
  const navigate = useNavigate();
  const handleRequestClick = () => navigate("/Request");
  const handleJobsClick = () => navigate("/Categories");
  const handleRewardsClick = () =>  alert("Coming Soon!");

  return (

    <div className="profile pt-5 pb-3">
      <Container>
        <Row className="m-5 justify-content-md-center">
          <Col xs={12} md={6}>
            <h1 className="welcome-title josefin-sans-400">Profile</h1>
            <hr />
          </Col>
        </Row>
        <Row className="text-center">

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
        <Row className="text-center">
          <Col className="profile-container">
            <h3>My Service Requests</h3>
            <p>Upcoming service requests</p>
            {userServices.map((userService, i) => (
               <Link to={`/jobs/${userService.id}`}>
              <h5 className="mt-2" key={i}>
                {userService.service_name}
              </h5>
               </Link>
            ))}

            <Button className="profile-button m-2" onClick={handleRequestClick}>
              Create New Request
            </Button>
          </Col>

          <Col className="profile-container">
            <h3>My Assigned Services</h3>
            <p>Upcoming jobs</p>
  
            {userJobs.map((userJob, i) => (
               <Link to={`/jobs/${userJob.id}`}>
              <h5 className="mt-2" key={i}>
                {userJob.service_name}
              </h5>
              </Link>
            ))};
            <Button className="profile-button m-2" onClick={handleJobsClick}>
              View Job Marketplace
            </Button>
          </Col>
        </Row>
        <Row className="text-center">
          <Col className="profile-container">
            <h3>Points</h3>
            <p>Here is your current point score:</p>
            <h4>{userInfo.total_points}</h4>
            <Button className="profile-button m-2" onClick={handleRewardsClick}>Get Rewards</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
