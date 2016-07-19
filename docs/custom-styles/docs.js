import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import Radium, { Style } from "radium";
import { VictoryAxis, VictoryLine } from "victory-chart";
import { VictoryLabel } from "victory-core";
import { VictoryTheme, ecologyPlaygroundLoading } from "formidable-landers";

class CustomStylesTutorial extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React,
            ReactDOM,
            VictoryAxis,
            VictoryLine,
            VictoryLabel
          }}
          playgroundtheme="elegant"
          customRenderers={ecologyPlaygroundLoading}
        />
        <Style rules={VictoryTheme}/>
      </div>
    );
  }
}

export default Radium(CustomStylesTutorial); //eslint-disable-line new-cap
