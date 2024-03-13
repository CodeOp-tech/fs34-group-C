import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function About() {
  return (
    <>
      <Card p-2>
        <Card.Body>
          <h1>
            Welcome to ShareTimeShareLove THIS IS OBVIOUSLY JUST SOME TEST TEXT
          </h1>
          ShareTimeShareLove is all about matching demand & supply - but make it
          more social, communial and heart-to-heart. This website was built to
          create anyone access to help in daily life matters, be it in your
          household, in the garden or your Granny with her new iPhone.
          ShareTimeShareLove works on a non-financial base. Whenever you do a
          job for someone, you earn points. Whenever you have someone do
          something for you, you "pay" using the points you have collected
          previously.
        </Card.Body>
        <Card.Body>
          <h5>Here's how it works</h5>
        </Card.Body>
        <ListGroup as="ol" numbered>
          <ListGroup.Item as="li">
            Register an account and log in.
          </ListGroup.Item>
          <ListGroup.Item as="li">
            Complete your profile information in My Profile.
          </ListGroup.Item>
          <ListGroup.Item as="li">
            Post a service request or accept listed job offers in "Marketplace".
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
