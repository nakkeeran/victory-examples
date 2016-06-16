import React from "react";
import Radium from "radium";

// Source
import CustomTheme from "../../src/components/custom-theme";

class CustomThemeDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Custom Theme</h1>
        <br/>
        <CustomTheme />
      </div>
    );
  }
}

export default Radium(CustomThemeDemo); // eslint-disable-line new-cap
