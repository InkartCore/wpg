import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import ImageSlider from "./components/imageSlider"


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ImageSlider />
        <h1>Welcome to Electrovert!!</h1>
      </React.Fragment>
    );
  }
}

export default App;
