import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

export default function Register() {
  const navigate = useNavigate();
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
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="profile pt-5 pb-3 ">
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
            <div className="josefin-sans-400">Please register here</div>
            <Form onSubmit={handleSubmit} className="josefin-sans-300">
              <Row className="mb-3 mt-2">
                <Form.Group as={Col} md="6">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={input.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
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
                <Form.Group as={Col} md="6">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    value={input.firstname}
                    onChange={handleChange}
                    name="firstname"
                    type="text"
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
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
              <Button className="button" type="submit">
                Register
              </Button>
            </Form>

            <div className="text-center p-4">
              <div className="mt-2">
                Already have an account? Click here to{" "}
                <Link to="/login">Login</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
