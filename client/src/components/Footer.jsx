import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        {/* <Row>
          <Col className="josefin-sans-300 p-4 footer">Contact</Col>
          <Col className="josefin-sans-300 p-4 footer">Follow us on</Col>
          <Col className="josefin-sans-300 p-4 footer">Help</Col>
          <Col className="josefin-sans-300 p-4 footer">Team</Col>
        </Row> */}
        <Row className="josefin-sans-300 justify-content-center m-4">
          Created with ♥︎ by Alys, Ari and Jana
        </Row>
      </Container>
    </div>
  );
}
