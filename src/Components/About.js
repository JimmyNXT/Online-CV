import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default class About extends Component {
  render() {
    let aboutMeContent = <p>Some text</p>;

    let contactDetailsContent = <p>Some text</p>;

    let resumeDownloadLink = "./#";

    let profilePic = "";

    if (this.props.data) {
      aboutMeContent = <p>{this.props.data.bio}</p>;
      contactDetailsContent = (
        <div>
          <p>
            <FontAwesomeIcon icon={["fas", "user"]} />
            &nbsp;&nbsp;
            {this.props.data.name}
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "phone"]} />
            &nbsp;&nbsp;
            {this.props.data.contactDetails.phone}
          </p>{" "}
          <p>
            <FontAwesomeIcon icon={["fas", "envelope-open"]} />
            &nbsp;&nbsp;
            {this.props.data.contactDetails.email}
          </p>
        </div>
      );
      resumeDownloadLink = `./${this.props.data.resumedownload}`;
      profilePic = `./${this.props.data.image}`;
    }

    return (
      <Container
        id="about"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <Row>
          <Col sm={false} md={3}>
            <Image src={profilePic} roundedCircle width="100%" />
          </Col>
          <Col ms={12} md={9}>
            <Row>
              <h2>About Me</h2>
              {aboutMeContent}
            </Row>
            <br />
            <Row>
              <div className="col-sm-12 col-lg-8">
                <h2>Contact Details</h2>
                {contactDetailsContent}
              </div>

              <div className="col-sm-12 col-lg-4 align-middle">
                <Button variant="primary" size="lg" href={resumeDownloadLink}>
                  <span style={{ fontSize: "25px" }}>
                    <FontAwesomeIcon
                      icon={["fas", "download"]}
                      style={{ paddingRight: "12px" }}
                    />
                  </span>
                  Download Resume
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
