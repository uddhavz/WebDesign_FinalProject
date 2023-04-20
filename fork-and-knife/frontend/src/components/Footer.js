import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "black" }}>
      <Container>
        <Row>
          <Col className="text-center">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaFacebook style={{ fontSize: "24px" }} />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaTwitter style={{ fontSize: "24px" }} />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaGoogle style={{ fontSize: "24px" }} />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaInstagram style={{ fontSize: "24px" }} />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaLinkedinIn style={{ fontSize: "24px" }} />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <FaGithub
                style={{
                  fontSize: "24px",
                }}
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3" style={{ color: "white" }}>
            &copy; {new Date().getFullYear()} Fork And Knife
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
