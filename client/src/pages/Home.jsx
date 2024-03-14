import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import useAuth from "../hooks/useAuth";
import AuthContext from "../contexts/AuthContext";
import RequireAuth from "../components/RequireAuth";

export default function Home() {
  return (
    <>
      <Container>
        <Row className="m-5 justify-content-md-center">
          <Col xs={12} md={6}>
            <div className="sacramento-regular welcome-title ">
              Share time,
              <br />
              share love
              <br />
            </div>
            <div className="josefin-sans-400 fs-5">with TimeShare!</div>
            <hr />
            <div className="josefin-sans-300 mt-4 mb-4">
              Connect with your local community by asking for and offering
              helpful services. Be it asking for a hand with your vegetable
              garden or helping a Granny with her new iPhone.
            </div>
            <Button className="button josefin-sans-400" href="/Request">
              Request service
            </Button>
          </Col>
          <Col md="auto">
            <Image
              // src="https://cdn-icons-png.freepik.com/512/7137/7137608.png"
              // src="https://images.squarespace-cdn.com/content/v1/5ed08ac08932251cfb889aa1/1590965224997-KLEQQFBDVCC48VDNOM0Z/shutterstock_1487974577_ABC.png"
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTISN4obds8z1eobD5UzdYY-gamPaBDiBKK3sA6mYX8QO_G2QGKYKkIWpaLUQv8yRkXEE&usqp=CAU"
              // src="https://grpride.org/wp-content/uploads/2023/10/pride-festival-volunteers.png"
              src="https://www.givsum.com/assets/landing-pages/LandingIllu-DonorVolunteer-edit-518d552a9f2c80f100bccc5a9d5a602a0c15971152ff5bfdcba7b0204d29103c.png"
              // roundedCircle
              className="img d-flex align-items-center"
            ></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
}
