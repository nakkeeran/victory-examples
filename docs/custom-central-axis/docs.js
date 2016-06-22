/*
* Custom Theme for Docs site
* This is what will be deployed to our open source site.
*/
import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Playground from "component-playground";
// Scope
import { VictoryAxis, VictoryBar, VictoryStack, VictoryLabel } from "victory";
// Example Source
import Example from "raw!./source.example";

class CustomCentralAxisTutorial extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <h1>Custom Central Axis</h1>
        <pre>
          <div className="Interactive">
            <Playground
              codeText={Example}
              scope={{
                React,
                ReactDOM,
                VictoryAxis,
                VictoryBar,
                VictoryStack,
                VictoryLabel
              }}
              noRender={false}
              theme="elegant"
            />
          </div>
        </pre>
      </div>
    );
  }
}

export default Radium(CustomCentralAxisTutorial); //eslint-disable-line new-cap
