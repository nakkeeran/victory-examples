import React from "react";
import Radium from "radium";

// VComponents
import { VictoryAxis, VictoryLine } from "victory-chart";
import { VictoryLabel } from "victory-core";

class MultipleAxes extends React.Component {
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
    const blueColor = "#00a3de";

    return (
      <div>
        <h1>Custom Theme</h1>

        <svg style={styles.parent} viewBox="0 0 500 300">
          <VictoryAxis
            style={{
              data: {
                strokeWidth: 2
              },
              labels: {
                fontSize: 16
              }
            }}
            orientation="bottom"
            domain={[0, 20]}
            label="Years"
            standalone={false}
          />

          <VictoryAxis dependent
            style={{
              axis: {stroke: blueColor, strokeWidth: 2},
              ticks: {stroke: blueColor},
              tickLabels: {fontSize: 12}
            }}
            orientation="left"
            domain={[-10, 15]}
            standalone={false}
          />

          <VictoryLabel
            x={25} y={40}
            textAnchor="start"
            verticalAnchor="end"
            lineHeight={1}
            style={{
              fill: blueColor,
              fontSize: "12px",
              fontStyle: "italic"
            }}
          >
            {"GDP \n % change on a year earlier"}
          </VictoryLabel>

          <VictoryAxis dependent
            style={{
              axis: {stroke: "blue", strokeWidth: 2},
              ticks: {stroke: "blue"},
              tickLabels: {fontSize: 12}
            }}
            orientation="right"
            domain={[-0.8, 0.8]}
            label="High Frequency"
            standalone={false}
          />
          <VictoryLine
            standalone={false}
          />
          <VictoryLine
            standalone={false}
          />
        </svg>
      </div>
    );
  }
}

export default Radium(MultipleAxes); // eslint-disable-line new-cap
