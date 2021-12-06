import React, { Component } from "react";
import {
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";

export default class Portfolio extends Component {
  render() {
    let portfolioContent = <p>There seems to be nothing here</p>;

    if (this.props.data) {
      portfolioContent = this.props.data.projects.map((project) => {
        let stackContent = project.stack.map((stack) => {
          return <ListGroup.Item>{stack}</ListGroup.Item>;
        });
        return (
          <Col sm={3} style={{ paddingBottom: "20px" }}>
            <OverlayTrigger
              key={project.title}
              trigger="hover"
              placement="top"
              overlay={
                <Popover
                  id={`popover-${project.title}`}
                  style={{ maxWidth: "100%", width: "100%" }}
                >
                  <Popover.Header as="h3">{project.title}</Popover.Header>
                  <Popover.Body>
                    <Row>
                      <Col sm={2}>
                        <Image
                          src={`./${project.image}`}
                          roundedCircle
                          width="100%"
                        />
                      </Col>
                      <Col sm={8}>
                        <p style={{ padding: "40px" }}>{project.description}</p>
                      </Col>
                      <Col sm={2}>
                        <p className="h5">Technologies Used</p>
                        <ListGroup>{stackContent}</ListGroup>
                      </Col>
                    </Row>
                  </Popover.Body>
                </Popover>
              }
            >
              <a href={project.url}>
                <Card>
                  <Card.Img src={`./${project.image}`} height="220px" />
                  <Card.Title className="text-center">
                    {project.title}
                  </Card.Title>
                </Card>
              </a>
            </OverlayTrigger>
          </Col>
        );
      });
    }

    return (
      <div id="portfolio">
        <Container style={{ paddingTop: "20px" }}>
          <Row>
            <div className="text-center" style={{ paddingTop: "10px" }}>
              <p className="h5">Checkout some of my work</p>
            </div>
          </Row>
          <Row>{portfolioContent}</Row>
        </Container>
      </div>
    );
  }
}
