import React, { useState } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import "./NavigationBar.css";
import SupabaseLogin from "../SupabaseLogin/SupabaseLogin";

function NavigationBar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    setLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <div className="topLeft">
          <Navbar.Brand href="/home">Log Everything</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="topCenter ">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </div>
          <div className="topRight">
            <Form inline="true">
              {loggedIn ? (
                <Button variant="outline-warning" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Button
                  variant="outline-warning"
                  onClick={() => setShowLoginModal(true)}
                >
                  Login
                </Button>
              )}
            </Form>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <SupabaseLogin
        show={showLoginModal}
        handleClose={() => setShowLoginModal(false)}
        handleLogin={handleLogin}
      />
    </>
  );
}

export default NavigationBar;
