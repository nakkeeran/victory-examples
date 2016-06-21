/*
* Custom Theme for Docs site
* This is what will be deployed to our open source site.
*/
import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Playground from "component-playground";
// Scope
import {
  VictoryChart,
  VictoryArea,
  VictoryAxis,
  VictoryScatter,
  VictoryLabel
} from "victory";
// Example Source
import TooltipSource from "../../src/components/tooltip";
import Example from "raw!./source.example";

class TooltipTutorial extends React.Component {
  /* eslint-disable max-len */
  render() {
    return (
      <div className="Ecology playgroundsMaxHeight">
        <h1>Tooltip</h1>
        <p>
          A custom tooltip is achieved by creating a <code>Flyout</code> React component and passing it as <code>labelComponent</code> to <code>VictoryScatter</code>.
        </p>
        <pre>
          <div className="Interactive">
            <Playground
              codeText={Example}
              scope={
                {
                  React,
                  ReactDOM,
                  TooltipSource,
                  VictoryChart,
                  VictoryArea,
                  VictoryAxis,
                  VictoryScatter,
                  VictoryLabel
                }
              }
              noRender={false}
              theme="elegant"
            />
          </div>
        </pre>
      </div>
    );
  }
  /* eslint-enable max-len */
}

export default Radium(TooltipTutorial); //eslint-disable-line new-cap
