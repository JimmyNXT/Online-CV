import React, { Component } from "react";
import { Card, Container, ProgressBar } from "react-bootstrap";

export default class Resume extends Component {
  render() {
    let edicationContent = <p style={{ padding: "30px" }}>Resume</p>;

    let workContent = <p style={{ padding: "30px" }}>Resume</p>;

    let skillContent = <p style={{ padding: "30px" }}>Resume</p>;

    if (this.props.data) {
      edicationContent = (
        <p style={{ padding: "30px" }}>
          {this.props.data.education.map((education) => {
            return (
              <div className="row">
                <div className="col-sm-2">
                  <h5>{education.graduated}</h5>
                </div>
                <div className="col-sm-10">
                  <h3>{education.school}</h3>
                  <h4>{education.degree}</h4>
                  <p style={{ paddingBottom: "20px" }}>
                    {education.experience}
                  </p>
                </div>
              </div>
            );
          })}
        </p>
      );

      workContent = (
        <p style={{ padding: "30px" }}>
          {this.props.data.work.map((work) => {
            return (
              <div className="row">
                <div className="col-sm-2">
                  <h5>{work.years}</h5>
                </div>
                <div className="col-sm-10">
                  <h3>{work.company}</h3>
                  <h4>{work.title}</h4>
                  <p style={{ paddingBottom: "20px" }}>{work.description}</p>
                </div>
              </div>
            );
          })}
        </p>
      );

      skillContent = (
        <p style={{ padding: "30px" }}>
          {this.props.data.skills.map((skill) => {
            return (
              <div style={{ padding: "10px" }}>
                <Card key={skill.name}>
                  <Card.Title>{skill.name}</Card.Title>
                  <Card.Text>
                    <ProgressBar now={skill.level} />
                  </Card.Text>
                </Card>
              </div>
            );
          })}
        </p>
      );
    }

    let resumeContent = (
      <div className="bg-dark" style={{ paddingTop: "40px" }}>
        <Container
          id="resume"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
          className="bg-light"
        >
          <div className="jumbotron">
            <h2>Education</h2>
            {edicationContent}
          </div>
          <div className="jumbotron">
            <h2>Work History</h2>
            {workContent}
          </div>
          <div className="jumbotron">
            <h2>Skills</h2>
            {skillContent}
          </div>
        </Container>
      </div>
    );

    return resumeContent;
  }
}
