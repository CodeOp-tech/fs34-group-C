import { useState } from "react";
import axios from "axios";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

export default function Register() {
  const [input, setInput] = useState([
    { email: "", password: "", firstname: "", lastname: "" },
  ]);
  const [data, setData] = useState(null);

  const addUser = async () => {
    try {
      const response = await axios.post("/api/auth/register", input);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser();
      alert("You successfully registered!");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={input.email}
                onChange={handleChange}
                name="email"
                type="email"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={input.password}
                onChange={handleChange}
                name="password"
                type="password"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>First name</Form.Label>
              <Form.Control
                value={input.firstname}
                onChange={handleChange}
                name="firstname"
                type="text"
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                value={input.lastname}
                onChange={handleChange}
                name="lastname"
                type="text"
                required
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}
