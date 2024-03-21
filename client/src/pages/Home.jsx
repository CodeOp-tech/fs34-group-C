import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function Home() {
  return (
    <>
      <Container>
        <Row className="m-5 justify-content-md-center">
          <Col xs={12} md={6}>
            <div className="sacramento-regular welcome-title">
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
              src="https://www.givsum.com/assets/landing-pages/LandingIllu-DonorVolunteer-edit-518d552a9f2c80f100bccc5a9d5a602a0c15971152ff5bfdcba7b0204d29103c.png"
              className="img d-flex align-items-center"
            ></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
}
