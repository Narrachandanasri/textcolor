import React, { Component } from "react";
export default class TextColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black"
    };
  }
  setRed = () => {
    this.setState({ color: "red" });
  };
  setGreen = () => {
    this.setState({ color: "green" });
  };
  v;
  setBlue = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <>
        <h1 style={{ color: this.state.color }}>chandana</h1>
        <button onClick={this.setRed}>red</button>
        <button onClick={this.setBlue}>blue</button>
        <button onClick={this.setGreen}>green</button>
      </>
    );
  }
}
