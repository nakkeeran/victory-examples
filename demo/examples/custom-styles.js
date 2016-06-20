import React from "react";
import Radium from "radium";

// VComponents
import CustomStyles from "../../src/components/custom-styles";

class CustomStylesDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Custom Styles</h1>

        <CustomStyles />
      </div>
    );
  }
}

export default Radium(CustomStylesDemo); //eslint-disable-line new-cap
