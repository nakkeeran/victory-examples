import React from "react";
import Radium from "radium";

// VComponents
import { VictoryAxis, VictoryLine, VictoryScatter } from "victory-chart";

class ErrorBar extends React.Component {
  render() {
    console.log(this.props);
    const { datum, length, position, style } = this.props;

    return (
      <g>
        <circle
          cx={position.x}
          cy={position.y}
          r={2.5}
          fill={style.fill}
        />
        <line
          x1={position.x}
          y1={position.y + datum.error}
          x2={position.x}
          y2={position.y - datum.error}
          stroke={style.fill}
          strokeWidth={1.5}
        />
        <line
          x1={position.x - 3}
          y1={position.y + datum.error}
          x2={position.x + 3}
          y2={position.y + datum.error}
          stroke={style.fill}
          strokeWidth={1.5}
        />
        <line
          x1={position.x - 3}
          y1={position.y - datum.error}
          x2={position.x + 3}
          y2={position.y - datum.error}
          stroke={style.fill}
          strokeWidth={1.5}
        />
      </g>
    );
  }
}

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
    const dataSet1 = [
      {x: 0, y: 250, error: 20},
      {x: 1, y: 220, error: 15},
      {x: 2, y: 320, error: 20},
      {x: 3, y: 235, error: 10},
      {x: 4, y: 115, error: 7},
      {x: 5, y: 130, error: 14},
      {x: 6, y: 50, error: 4}
    ];
    const dataSet2 = [
      {x: 0, y: 145, error: 10},
      {x: 1, y: 100, error: 10},
      {x: 2, y: 120, error: 10},
      {x: 3, y: 95, error: 10},
      {x: 4, y: 80, error: 10},
      {x: 5, y: 45, error: 10},
      {x: 6, y: 120, error: 10}
    ];

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

          <VictoryScatter
            standalone={false}
            domain={{
              x: [0, 6],
              y: [0, 350]
            }}
            data={dataSet1}
            style={{
              data: {fill: "blue"}
            }}
            dataComponent={<ErrorBar />}
          />
          <VictoryLine
            standalone={false}
            domain={{
              x: [0, 6],
              y: [0, 350]
            }}
            data={dataSet1}
            style={{
              data: {stroke: "blue", strokeWidth: 1.5}
            }}
          />

          <VictoryScatter
            standalone={false}
            domain={{
              x: [0, 6],
              y: [0, 350]
            }}
            data={dataSet2}
            style={{
              data: {fill: "orange"}
            }}
            dataComponent={<ErrorBar />}
          />
          <VictoryLine
            standalone={false}
            domain={{
              x: [0, 6],
              y: [0, 350]
            }}
            data={dataSet2}
            style={{
              data: {stroke: "orange", strokeWidth: 1.5}
            }}
          />
        </svg>
      </div>
    );
  }
}

export default Radium(CustomDataComponents);
