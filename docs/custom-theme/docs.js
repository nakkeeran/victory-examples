/*
* Custom Theme for Docs site
* This is what will be deployed to our open source site.
*/
import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
import Playground from "component-playground";
// Scope
import { VictoryAxis, VictoryLine, VictoryLabel } from "victory";
// Example Source
import CustomTheme from "../../src/components/custom-theme";
import Example from "raw!./source.example";

class Docs extends React.Component {
  render() {
    return (
      <div className="playgroundsMaxHeight">
        <div className="Interactive">
          <Playground
            codeText={Example}
            scope={{React, ReactDOM, CustomTheme, VictoryAxis, VictoryLine, VictoryLabel}}
            noRender={false}
            theme="elegant"
          />
        </div>
      </div>
    );
  }
}

export default Radium(Docs); //eslint-disable-line new-cap
