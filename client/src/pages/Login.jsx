import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { isLoggedIn, signIn } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credentials;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
    try {
      const { data } = await axios("/api/auth/login", {
        method: "POST",
        data: credentials,
      });
      localStorage.setItem("token", data.token);
      console.log(data.message, data.token);
      signIn();
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pt-5 pb-3">
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
            <div className="josefin-sans-400">Please login</div>
            <Form className="josefin-sans-300">
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Form.Control
                  value={email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  className="m-2 mt-0 mb-0"
                />
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Form.Control
                  value={password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  className="m-2 mt-0 mb-2"
                />
              </Form.Group>
              <Button className="button" onClick={login}>
                Log in
              </Button>
            </Form>
            {isLoggedIn ? (
              <div className="text-center p-4">
                <div className="alert">You are logged in</div>
              </div>
            ) : (
              <div className="text-center p-4">
                <div className="mt-2">
                  Not registered yet? Click here to{" "}
                  <Link to="/register">Register</Link>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
