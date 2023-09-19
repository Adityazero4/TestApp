import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import office from "../assets/office.png";
import "./Homepage.css";
import { BiSolidBusiness } from "react-icons/bi";

const Homepage = () => {
  const customStyle = {
    backgroundColor: "#54ade7",
    color: "#fff",
  };
  return (
    <>
      <Navbar style={customStyle} variant="dark">
        <Container>
          <Nav className="mr-auto">
            <Nav.Link href="#">We are open 24/7</Nav.Link>
            <Nav.Link href="#">
              <FaEnvelope
                className="nav-icon"
                style={{
                  marginRight: "0.5em",
                }}
              />
              none@gmail.com
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link href="#">
              <FaTwitter />
            </Nav.Link>
            <Nav.Link href="#">
              <FaInstagram />
            </Nav.Link>
            <Nav.Link href="#">
              <FaLinkedin />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar className="homepage-navbar2" variant="light" expand="lg">
        <Container>
          <Container fluid className="mr-auto d-flex justify-content-between">
            <Navbar.Brand href="#">
              <BiSolidBusiness
                style={{
                  fontSize: "2rem",
                }}
              />{" "}
              Bisnes
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#" className="nav-link-hover-blue">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-hover-blue">
                About
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-hover-blue">
                Project
              </Nav.Link>{" "}
              <Nav.Link href="#" className="nav-link-hover-blue">
                Blog
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-hover-blue">
                Services
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-hover-blue">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container
        fluid
        style={{
          backgroundColor: "#D2E0E9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Row className="align-items-center ms-lg-5">
          <Col xs={12} md={6}>
            <p className="my-1">Ki name hake boibo tomake</p>
            <h2 className="my-2">
              We Are Consulting for Your Business Finances
            </h2>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              cupiditate ullam ipsam facere libero praesentium fugit.
            </p>
            <div className="my-4">
              <Button variant="primary" size="md">
                Start Now
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image
              src={office}
              alt="office"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
