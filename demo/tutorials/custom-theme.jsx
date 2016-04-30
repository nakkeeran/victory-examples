/*global document:false*/
import React from "react";
import Radium from "radium";

// VComponents
import { VictoryAxis, VictoryLine } from "victory-chart";

const styles = {
  parent: {
    boxSizing: "border-box",
    display: "block",
    width: "100%",
    height: "100%",
    padding: 50
  }
};

class MultipleAxes extends React.Component {
  render() {
    return (
      <div>
        <h1>Custom Theme</h1>
      </div>
    );
  }
}

export default Radium(MultipleAxes);
