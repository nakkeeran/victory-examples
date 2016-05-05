import React from "react";
import Radium from "radium";

// VComponents
import { VictoryAxis, VictoryLine } from "victory-chart";

class CustomDataComponents extends React.Component {
  getStyles() {
    return {
      parent: {
        boxSizing: "border-box",
        display: "block",
        width: "100%",
        height: "100%",
        padding: 50
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <div>
        <svg style={styles.parent} viewBox="0 0 500 300">
          <VictoryAxis
            standalone={false}
            tickValues={[
              "Halifax",
              "Montreal",
              "Quebec",
              "Ottawa",
              "Toronto",
              "Calgary",
              "Vancouver"
            ]}
            label="City"
            style={{
              grid: {stroke: "rgba(0, 0, 0, 0.1)"},
              axis: {stroke: "none"},
              ticks: {stroke: "none"}
            }}
          />
          <VictoryAxis dependentAxis
            standalone={false}
            domain={[0, 350]}
            label="cm"
            style={{
              grid: {stroke: "rgba(0, 0, 0, 0.1)"},
              axis: {stroke: "none"},
              ticks: {stroke: "none"}
            }}
          />
        </svg>
      </div>
    );
  }
}

export default Radium(CustomDataComponents);
