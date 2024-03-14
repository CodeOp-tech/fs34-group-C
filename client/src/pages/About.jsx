import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function About() {
  return (
    <>
      <div className="container">
        <Card className="m-5 row">
          <Card.Body>
            Welcome to TimeShare THIS IS OBVIOUSLY JUST SOME TEST TEXT
          </Card.Body>

          <Card.Body className="col-6">
            <strong>TimeShare</strong> is all about matching demand & supply -
            but make it more social, communial and heart-to-heart. This website
            was built to create anyone access to help in daily life matters, be
            it in your household, in the garden or your Granny with her new
            iPhone.
            <strong>TimeShare</strong> works on a non-financial base. Whenever
            you do a job for someone, you earn points. Whenever you have someone
            do something for you, you "pay" using the points you have collected
            previously.
          </Card.Body>
          <Card.Body>
            <h5>Here's how it works</h5>

            <ul>
              <li>Register an account and log in.</li>
              <li>Complete your profile information in My Profile.</li>
              <li>
                Post a service request or accept listed job offers in
                "Marketplace".
              </li>
            </ul>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
