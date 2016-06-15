import React, { PropTypes } from "react";
import Radium from "radium";

const styles = {
  base: {
    color: "#000",
    fontSize: 12,
    textDecoration: "underline"
  },
  red: {
    color: "#d71920",
    fontSize: 30
  }
};

class VictoryExamples extends React.Component {
  static propTypes = {
    color: PropTypes.string
  };

  render() {
    return (
      <div style={[styles.base, this.props.color === "red" && styles.red]}>
        Edit me!
      </div>
    );
  }
}

export default Radium(VictoryExamples); // eslint-disable-line new-cap
