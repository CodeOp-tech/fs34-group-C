import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Profile() {
  const [userInfo, setUserInfo] = useState([]);

  async function getUserInfo () {
    console.log("this function call works")
    try {
      const response = await fetch("api/:id", {
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
  <div>

    <h1 className="text-center">Profile Page</h1>

    <Container className="text-center">
      <Row>
        <Col>
        <h3>Profile information</h3>
        <div>This is my information</div>
        {userInfo.map((user) => (
          <div key={user.id}>
            <p>{user.firstname}</p>         
            </div>
        ))}
        <button>Update Categories</button>
        </Col>
 
      </Row>
      <Row>
        <Col><h3>My Service Requests</h3>
        <p>Here go all the service requests I've posted</p>
        </Col>
   
        <Col>
        <h3>My Assigned Services</h3>
        <p>Here are all my upcoming jobs</p>
        </Col>
     
      </Row>
      <Row>
        <Col>
        <h3>Points</h3>
        <p>Here is where my points are logged and updated</p>
        </Col>
 

      </Row>
    </Container>
    
    </div>
  )
}
