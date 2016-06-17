import React from "react";
import Radium from "radium";

// VComponents
import CustomDataComponent from "../../src/components/custom-data-component";

class CustomDataComponentDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Custom Data Component</h1>

        <CustomDataComponent />
      </div>
    );
  }
}

export default Radium(CustomDataComponentDemo); //eslint-disable-line new-cap
