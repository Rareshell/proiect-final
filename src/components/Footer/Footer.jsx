import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className=" footer bg-light text-dark">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>You will never experience something better.</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/home" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>123 Street Name, City, Country</p>
            <p>Email: info@example.com</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Your Blog Name. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
