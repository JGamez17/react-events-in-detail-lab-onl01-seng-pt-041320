// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  mouseCoordinates = (event) => {
    const coordArray = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordArray);
  };

  render() {
    return <button onClick={this.mouseCoordinates}>Click!</button>;
  }
}

export default CoordinatesButton;
