import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        sticky="top"
        expand="lg"
      >
        <Container>
          <Navbar.Toggle
            className="m-auto"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="m-auto" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="m-auto" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="m-auto" href="#resume">
                Resume
              </Nav.Link>
              <Nav.Link className="m-auto" href="#portfolio">
                Portfolio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
