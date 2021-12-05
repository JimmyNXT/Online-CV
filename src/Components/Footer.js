import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    let socialContent = (
      <Nav.Link href="#">
        <FontAwesomeIcon icon={["fab", "google"]} />
      </Nav.Link>
    );

    if (this.props.data) {
      console.log(this.props.data.social);
      socialContent = this.props.data.contactDetails.social.map((soc) => {
        return (
          <Nav.Link href={soc.url}>
            <FontAwesomeIcon icon={soc.iconName} />
          </Nav.Link>
        );
      });
    }
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Collapse>
            <Nav className="m-auto">
              <span style={{ fontSize: "30px", display: "flex" }}>
                {socialContent}
              </span>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
