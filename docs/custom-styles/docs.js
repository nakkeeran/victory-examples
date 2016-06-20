/*
* Custom Theme for Docs site
* This is what will be deployed to our open source site.
*/
import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Playground from "component-playground";
// Scope
import { VictoryAxis, VictoryLine } from "victory-chart";
import { VictoryLabel } from "victory-core";
// Example Source
import CustomStyles from "../../src/components/custom-styles";
import Example from "raw!./source.example";

class CustomStylesTutorial extends React.Component {
  render() {
    return (
      <div className="playgroundsMaxHeight">
        <h1>Custom Styles</h1>
        <p>The following chart has multiple axes, a time axes, and a very specific look.</p>
        <pre>
          <div className="Interactive">
            <Playground
              codeText={Example}
              scope={{React, ReactDOM, CustomStyles, VictoryAxis, VictoryLine, VictoryLabel}}
              noRender={false}
              theme="elegant"
            />
          </div>
        </pre>
      </div>
    );
  }
}

export default Radium(CustomStylesTutorial); //eslint-disable-line new-cap
