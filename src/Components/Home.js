import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Home extends Component {
  render() {
    let mainTitle = "Title";
    let welcomeMessage = "Blank";
    return (
      <div id="home" style={{ height: `${window.innerHeight}px` }}>
        <Container
          className="text-center"
          style={{ margin: "0", position: "absolute", top: "30%" }}
        >
          <Row>
            <Col>
              <p className="h1">{mainTitle}</p>
            </Col>
          </Row>
          <Row>
            <Col style={{ paddingTop: "20px" }}>
              <p className="h3">{welcomeMessage}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
