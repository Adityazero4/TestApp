import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";
import { CiMemoPad } from "react-icons/ci";
import "./ServicePage.css";

const ServicePage = () => {
  return (
    <Container fluid className="service-page-container">
      <Row>
        <div className="text-center">
          <h1>Our Services</h1>
          <div className="underline"></div>
          <div className="text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel
              ducimus adipisci, in praesentium voluptatibus officia magni.
            </p>
          </div>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Card className="text-center service-card">
            <Card.Body>
              <GiTakeMyMoney className="service-icon" />
              <Card.Text className="mt-3">
                <h4>Financial Consulting</h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quibusdam eveniet adipisci officiis tenetur omnis
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center service-card">
            <Card.Body>
              <HiSpeakerphone className="service-icon" />
              <Card.Text className="mt-3">
                {" "}
                <h4>Content Marketing</h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quibusdam eveniet adipisci officiis tenetur omnis
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center service-card">
            <Card.Body>
              <CiMemoPad className="service-icon" />
              <Card.Text className="mt-3">
                {" "}
                <h4>Financial Advice</h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quibusdam eveniet adipisci officiis tenetur omnis
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Container className="text-center" style={{ marginTop: "30px" }}>
          <Button variant="primary" size="lg" className="mb-5">
            All Services
          </Button>
        </Container>
      </Row>
    </Container>
  );
};

export default ServicePage;
