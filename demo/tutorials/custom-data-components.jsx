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
          <VictoryLine
            standalone={false}
            domain={{
              x: [0, 6],
              y: [0, 350]
            }}
            data={[
              {x: 0, y: 230},
              {x: 1, y: 220},
              {x: 2, y: 320},
              {x: 3, y: 235},
              {x: 4, y: 115},
              {x: 5, y: 130},
              {x: 6, y: 50}
            ]}
            style={{
              data: {stroke: "blue"}
            }}
          />
          <VictoryLine
            standalone={false}
            domain={{
              x: [0, 6],
              y: [0, 350]
            }}
            data={[
              {x: 0, y: 145},
              {x: 1, y: 100},
              {x: 2, y: 120},
              {x: 3, y: 95},
              {x: 4, y: 80},
              {x: 5, y: 45},
              {x: 6, y: 120}
            ]}
            style={{
              data: {stroke: "orange"}
            }}
          />
        </svg>
      </div>
    );
  }
}

export default Radium(CustomDataComponents);
