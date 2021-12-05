import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

export default class About extends Component {
  render() {
    let aboutMeContent = <p>Some text</p>;

    let contactDetailsContent = <p>Some text</p>;

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
    }

    return (
      <Container id="about">
        <div className="row">
          <div className="d-none d-md-block col-sm-0 col-md-3">Profile pic</div>
          <div className="col-sm-12 col-md-9">
            <div className="row">
              <h2>About Me</h2>
              {aboutMeContent}
            </div>
            <br />
            <div className="row">
              <div className="col-sm-12 col-lg-8">
                <h2>Contact Details</h2>
                {contactDetailsContent}
              </div>

              <div className="col-sm-12 col-lg-4 align-middle">
                <Button variant="primary" size="lg">
                  <span style={{ fontSize: "25px" }}>
                    <FontAwesomeIcon
                      icon={["fas", "download"]}
                      style={{ paddingRight: "12px" }}
                    />
                  </span>
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
