import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import laptop from "../assets/laptopGirl.png";
import { AiFillSetting, AiFillCloud } from "react-icons/ai";
import { IoMdGlasses } from "react-icons/io";
import { BsTools } from "react-icons/bs";
import "./Aboutpage.css";

const Aboutpage = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#F0F0F0",
        color: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row className="align-items-center ms-lg-5">
        <Col xs={12} md={6}>
          <h2>We Have Many Years of Experience in Consulting Business</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            temporibus accusamus repellendus neque culpa ratione alias!
            Necessitatibus sint eum provident sequi a eius vero, officiis, dicta
            nulla nobis iste ipsum.
          </p>
          <div className="my-4">
            <Button variant="primary" size="md">
              Know More
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Image
            src={laptop}
            alt="laptop"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Col>
      </Row>

      <Container
        fluid
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <div className="item-container text-center">
          {" "}
          {/* Centering the text */}
          <div className="item-icon item-center">
            <AiFillSetting
              style={{
                fontSize: "3rem",
              }}
            />
          </div>
          <div
            className="item-text"
            style={{
              fontSize: "1.5rem",
            }}
          >
            <b>Construct</b>ion
          </div>
        </div>
        <div className="item-container text-center">
          {" "}
          {/* Centering the text */}
          <div className="item-icon item-center">
            <AiFillCloud
              style={{
                fontSize: "3rem",
              }}
            />
          </div>
          <div
            className="item-text"
            style={{
              fontSize: "1.5rem",
            }}
          >
            Dummy<b>Logo</b>
          </div>
        </div>
        <div className="item-container text-center">
          {" "}
          {/* Centering the text */}
          <div className="item-icon item-center">
            <IoMdGlasses
              style={{
                fontSize: "3rem",
              }}
            />
          </div>
          <div
            className="item-text"
            style={{
              fontSize: "1.5rem",
            }}
          >
            Random<b>Logo</b>
          </div>
        </div>
        <div className="item-container text-center">
          {" "}
          {/* Centering the text */}
          <div className="item-icon item-center">
            <BsTools
              style={{
                fontSize: "3rem",
              }}
            />
          </div>
          <div
            className="item-text"
            style={{
              fontSize: "1.5rem",
            }}
          >
            Random<b>Brand</b>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Aboutpage;
