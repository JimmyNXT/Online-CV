import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./Components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
    library.add(fas, fab);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home data={this.state.resumeData.home} />
        <About data={this.state.resumeData.about} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Footer data={this.state.resumeData.about} />
      </div>
    );
  }
}

export default App;
