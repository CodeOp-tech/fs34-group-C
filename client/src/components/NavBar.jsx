import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  const { isLoggedIn, signIn, signOut } = useAuth();

  const logout = () => {
    localStorage.removeItem("token");
    signOut();
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
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
              {isLoggedIn && (
                <Nav.Link as={Link} to="/categories">
                  Marketplace
                </Nav.Link>
              )}
              {isLoggedIn && (
                <Nav.Link as={Link} to="/request">
                  Request
                </Nav.Link>
              )}
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
                  <NavDropdown.Item as={Link} to="/chatbox">
                    Chats
                  </NavDropdown.Item>
                )}
                {isLoggedIn && (
                  <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
