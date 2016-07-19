import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import Radium, { Style } from "radium";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter, VictoryPie } from "victory";
import { VictoryTheme, ecologyPlaygroundLoading } from "formidable-landers";

class CustomDataComponentTutorial extends React.Component {
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
            VictoryChart,
            VictoryLine,
            VictoryScatter,
            VictoryPie
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

export default Radium(CustomDataComponentTutorial); //eslint-disable-line new-cap
