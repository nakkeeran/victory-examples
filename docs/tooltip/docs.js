import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import Radium, { Style } from "radium";
import { VictoryChart, VictoryArea, VictoryAxis, VictoryScatter, VictoryLabel } from "victory";
import { VictoryTheme, ecologyPlaygroundLoading } from "formidable-landers";

class TooltipTutorial extends React.Component {
  /* eslint-disable max-len */
  render() {
    return (
      <div className="Recipe">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{
            React,
            ReactDOM,
            VictoryChart,
            VictoryArea,
            VictoryAxis,
            VictoryScatter,
            VictoryLabel
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

export default Radium(TooltipTutorial); //eslint-disable-line new-cap
