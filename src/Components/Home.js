import React, { Component } from "react";
import { Card, Container, Row } from "react-bootstrap";

export default class Home extends Component {
  render() {
    let mainTitle = "Title";
    let welcomeMessage = "Blank";

    if (this.props.data) {
      mainTitle = this.props.data.mainTitle;
      welcomeMessage = this.props.data.welcomeMessage;
    }
    return (
      <div id="home" style={{ height: `${window.innerHeight}px` }}>
        <Container>
          <Row
            className="justify-content-md-center"
            style={{
              margin: "0",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Card className="text-center">
              <Card.Header as="p" className="h1">
                {mainTitle}
              </Card.Header>
              <Card.Text
                as="p"
                className="h3"
                style={{ paddingTop: "40px", paddingBottom: "20px" }}
              >
                {welcomeMessage}
              </Card.Text>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}
