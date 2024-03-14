import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {Container, Button, Row, Col, Image }from 'react-bootstrap';


export default function Profile() {
  const [userInfo, setUserInfo] = useState([]);

  async function getUserInfo () {
    console.log("this function call works")
    try {
      const response = await fetch("api/profile/user", {
        method: "GET",
        headers: {"authorization": "Bearer " + localStorage.getItem("token")
      },
      });
      const data = await response.json();
      setUserInfo(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [])

  return (
  <div className="profile">

    <h1 className="text-center">Profile Page</h1>

    <Container className="text-center">
      <Row>
        <Col className="profile-container">
        <h3 classname="m">Profile information</h3>
        {/* <Image src="holder.js/171x180" roundedCircle /> */}
        <div className="image-container rounded-circle justify-center"></div>
        <div>This is my information</div>
        {/*I want to show their name, email used, and the categories they have assigned themselves*/
        /* {userInfo.map((user) => (
          <div key={user.id}>
            <p>{user.firstname}</p>         
            </div>
        ))} */}
        <Button className="profile-button m-2">Update Information</Button>
        </Col>
 
      </Row>
      <Row>
        <Col className="profile-container"><h3>My Service Requests</h3>
        <p>Here go all the service requests I've posted</p>
        {/*map through all the service request names, which will show up as links. also want to add in*/}
        <Button className="profile-button m-2">Create New Request</Button>
        </Col>
   
        <Col className="profile-container">
        <h3>My Assigned Services</h3>
        <p>Here are all my upcoming jobs</p>
        {/*map through all the upcoming job names, which will show up as links*/}
        <Button className="profile-button m-2">View Job Marketplace</Button>
        </Col>
     
      </Row>
      <Row>
        <Col className="profile-container">
        <h3>Points</h3>
        <p>Here is where my points are logged and updated</p>
            {/*display the points attached to the user*/}

        </Col>
 

      </Row>
    </Container>
    
    </div>
  )
}
