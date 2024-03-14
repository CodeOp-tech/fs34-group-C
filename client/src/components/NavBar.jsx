import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";

export default function NavBar() {
  const { isLoggedIn, signIn, signOut } = useAuth();

  const logout = () => {
    localStorage.removeItem("token");
    signOut();
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">
            TimeShare
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/categories">
                Marketplace
              </Nav.Link>
              <Nav.Link as={Link} to="/request">
                Request
              </Nav.Link>
              <NavDropdown title="My Account" id="basic-nav-dropdown">
                {!isLoggedIn && (
                  <NavDropdown.Item as={Link} to="/login">
                    Login
                  </NavDropdown.Item>
                )}
                {isLoggedIn && (
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                )}
                {isLoggedIn && (
                  <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}
