import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function About() {
  return (
    <>
      <Container>
        <Row className="m-5 justify-content-md-center">
          <Col xs={12} md={6}>
            <h1 className="sacramento-regular welcome-title">About</h1>
            <hr />
            <div className="josefin-sans-300 mt-4 mb-4">
              <strong>TimeShare</strong> is all about matching demand & supply -
              but make it more social, communial and heart-to-heart. This
              website was built to create anyone access to help in daily life
              matters, be it in your household, in the garden or your Granny
              with her new iPhone.
            </div>
            <div className="josefin-sans-300 mt-4 mb-4">
              <strong>TimeShare</strong> works on a non-financial base. Whenever
              you do a job for someone, you earn points. Whenever you have
              someone do something for you, you "pay" using the points you have
              collected previously.
            </div>
            <div className="josefin-sans-300 mt-4 mb-4">
              <h5>Here's how it works</h5>

              <ul>
                <li>Register an account and log in.</li>
                <li>Complete your profile information in My Profile.</li>
                <li>
                  Post a service request or accept listed job offers in
                  "Marketplace".
                </li>
              </ul>
            </div>
          </Col>
          <Col md="auto" className="d-flex align-items-center">
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/couple-of-volunteer-collecting-trash-5631463-4696986.png"
              className="img"
            ></Image>
          </Col>
        </Row>
      </Container>
          
    </>
  );
}
