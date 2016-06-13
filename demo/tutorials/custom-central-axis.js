import React from "react";
import Radium from "radium";

// VComponents
import { VictoryAxis, VictoryBar, VictoryStack } from "victory-chart";

class CentralAxis extends React.Component {
  getStyles() {
    return {
      parent: {
        boxSizing: "border-box",
        display: "block",
        width: "100%",
        height: "100%",
        padding: 50
      },
      copy: {
        maxWidth: "37em"
      }
    };
  }

  render() {
    const styles = this.getStyles();

    /* eslint-disable max-len */
    return (
      <div>
        <h1>Custom Central Axis</h1>
        <svg style={styles.parent} viewBox="0 0 500 300">

          <VictoryAxis dependentAxis
            style={{
              axis: {strokeWidth: 1}
            }}
            offsetX={264.75}
            standalone={false}
            tickValues={[
              "Smartphone",
              "Laptop",
              "Television",
              "Tablet",
              "Fitness Monitor",
              "Smartwatch",
              "Connected Surveillance Camera",
              "Smart Thermostat",
              "Personal Drones"
            ]}
          />

          <VictoryStack horizontal
            height={300}
            style={{
              data: {width: 20},
              labels: {fontSize: 11}
            }}
          >
            <VictoryBar
              style={{data: {fill: "tomato"}, labels: {padding: -5}}}
              data={[
                {x: "Smartphone", y: 57},
                {x: "Laptop", y: 36},
                {x: "Televsion", y: 38},
                {x: "Tablet", y: 38},
                {x: "Fitness Monitor", y: 12},
                {x: "Smartwatch", y: 12},
                {x: "Connected Surveillance Camera", y: 10},
                {x: "Smart Thermostat", y: 9},
                {x: "Personal Drones", y: 6}
              ]}
              x={"x"}
              y={(data) => (-Math.abs(data.y))}
              labels={(data) => (`${Math.abs(data.y)}%`)}
            />
            <VictoryBar
              style={{data: {fill: "orange"}}}
              data={[
                {x: "Smartphone", y: 48},
                {x: "Laptop", y: 30},
                {x: "Television", y: 30},
                {x: "Tablet", y: 29},
                {x: "Fitness Monitor", y: 13},
                {x: "Smartwatch", y: 13},
                {x: "Connected Surveillance Camera", y: 11},
                {x: "Smart Thermostat", y: 9},
                {x: "Personal Drones", y: 7}
              ]}
              labels={(data) => (`${Math.abs(data.y)}%`)}
            />
          </VictoryStack>
        </svg>
        {/*<p style={styles.copy} className="Copy">
                  This example is not original; it is based on <a href="http://blogs.mathworks.com/loren/2013/03/27/multiple-y-axes/">the Multipe Y Axes example implemented in MATLAB</a>.
                </p>*/}
      </div>
    );
    /* eslint-enable max-len */
  }
}

export default Radium(CentralAxis); // eslint-disable-line new-cap
