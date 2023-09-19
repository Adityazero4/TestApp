import React from "react";
import { Container, Image, Col, Row, Form, Button } from "react-bootstrap";
import newsletter from "../assets/image.png";
import "../components/Contactpage.css";

const Contactpage = () => {
  return (
    <Container fluid className="contact-container ">
      <Image
        src={newsletter}
        alt="Background"
        fluid
        className="contact-image"
      />
      <div className="text-overlay">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2>Subscribe to Our Newsletter For More Updates</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem repellendus eius maiores voluptate fugiat minus.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <Form className="subscribe-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter your Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default Contactpage;
