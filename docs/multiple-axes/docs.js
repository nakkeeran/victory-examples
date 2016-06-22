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
  VictoryAxis,
  VictoryLine
} from "victory";
// Example Source
import Example from "raw!./source.example";

class MultipleAxesTutorial extends React.Component {
  /* eslint-disable max-len */
  render() {
    return (
      <div className="Recipe">
        <h1>Multiple Axes</h1>
        <pre>
          <div className="Interactive">
            <Playground
              codeText={Example}
              scope={
                {
                  React,
                  ReactDOM,
                  VictoryAxis,
                  VictoryLine
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

export default Radium(MultipleAxesTutorial); //eslint-disable-line new-cap
