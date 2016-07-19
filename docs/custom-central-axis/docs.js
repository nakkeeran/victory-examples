import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import Radium, { Style } from "radium";
import { VictoryAxis, VictoryBar, VictoryStack, VictoryLabel } from "victory";
import { VictoryTheme, ecologyPlaygroundLoading } from "formidable-landers";

class CustomCentralAxisTutorial extends React.Component {
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React,
            ReactDOM,
            VictoryAxis,
            VictoryBar,
            VictoryStack,
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

export default Radium(CustomCentralAxisTutorial); //eslint-disable-line new-cap
