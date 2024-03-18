import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="josefin-sans-300 p-4">
            Created with ♥︎ by Alys, Ari and Jana{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
