import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { merge } from "lodash";
import Radium, { Style } from "radium";
import { VictoryAxis, VictoryLine } from "victory";
import { VictoryTheme, ecologyPlaygroundLoading } from "formidable-landers";

class MultipleAxesTutorial extends React.Component {
  /* eslint-disable max-len */
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React,
            ReactDOM,
            VictoryAxis,
            VictoryLine
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
        <Style rules={VictoryTheme}/>
      </div>
    );
  }
  /* eslint-enable max-len */
}

export default Radium(MultipleAxesTutorial); //eslint-disable-line new-cap
