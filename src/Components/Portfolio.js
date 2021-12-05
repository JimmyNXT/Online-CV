import React, { Component } from "react";
import {
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Modal,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";

export default class Portfolio extends Component {
  constructor() {
    super();
  }

  render() {
    let portfolioContent = <p>There seems to be nothing here</p>;

    if (this.props.data) {
      portfolioContent = this.props.data.projects.map((project) => {
        let stackContent = project.stack.map((stack) => {
          return <ListGroup.Item>{stack}</ListGroup.Item>;
        });
        return (
          <div className="col-sm-3">
            <OverlayTrigger
              key={project.title}
              trigger="hover"
              placement="top"
              overlay={
                <Popover id={`popover-${project.title}`}>
                  <Popover.Header as="h3">{project.title}</Popover.Header>
                  <Popover.Body>
                    <Row>
                      <Col sm={3}>
                        <Image
                          src={`./${project.image}`}
                          height="70px"
                          width="70px"
                          roundedCircle
                        />
                      </Col>
                      <Col sm={9}>
                        <Container>
                          <Row>
                            <p>{project.description}</p>
                          </Row>
                          <Row>
                            <p className="h6">Technologies Used</p>
                            <ListGroup>{stackContent}</ListGroup>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Popover.Body>
                </Popover>
              }
            >
              <Card>
                <Card.Img src={`./${project.image}`} />
                <Card.Title className="text-center">{project.title}</Card.Title>
              </Card>
            </OverlayTrigger>
          </div>
        );
      });
    }

    return (
      <Container>
        <div className="row">
          <Card>
            <Card.Title className="text-center">
              Checkout some of my work
            </Card.Title>
            <Card.Body>{portfolioContent}</Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}
