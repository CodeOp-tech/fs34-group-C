import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

function Login() {
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
      alert("Logged in");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Form.Control
              value={email}
              onChange={handleChange}
              name="email"
              type="email"
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
            />
          </Form.Group>
          <Button variant="primary" onClick={login}>
            Log in
          </Button>
        </Form>
        <div className="mt-4">
          Not registered yet? Click here to <Link to="/register">Register</Link>
        </div>
      </Container>
    </div>
  );
}

export default Login;
