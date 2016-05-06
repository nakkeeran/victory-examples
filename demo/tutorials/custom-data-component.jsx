import React from "react";
import Radium from "radium";

// VComponents
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter
} from "victory-chart";

class CustomDataComponent extends React.Component {
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
    const data = [
      {x: 1, y: 30},
      {x: 2, y: 32},
      {x: 3, y: 65},
      {x: 4, y: 38},
      {x: 5, y: 50},
      {x: 6, y: 47},
      {x: 7, y: 38},
      {x: 8, y: 48},
      {x: 9, y: 80},
      {x: 10, y: 73},
      {x: 11, y: 76},
      {x: 12, y: 100}
    ];

    return (
      <div>
        <h1>Custom Data Component</h1>

        <svg style={styles.parent} viewBox="0 0 500 300">
          <VictoryChart domain={{x: [1, 12], y: [0, 100]}}>
            <VictoryAxis
              tickValues={[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "July",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
              ]}
              style={{
                axis: {strokeWidth: 1},
                ticks: {strokeWidth: 1},
                tickLabels: {fontSize: 8}
              }}
            />

          <VictoryScatter
            data={data}
          />

          <VictoryLine
            data={data}
            style={{
              data: {strokeWidth: 1}
            }}
          />
        </VictoryChart>
        </svg>
      </div>
    );
  }
}

export default Radium(CustomDataComponent);
