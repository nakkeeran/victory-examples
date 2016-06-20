import React from "react";
import Radium from "radium";

// VComponents
import CentralAxis from "../../src/components/custom-central-axis";

class CentralAxisDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Custom Central Axis</h1>
        <CentralAxis />
      </div>
    );
  }
}

export default Radium(CentralAxisDemo); // eslint-disable-line new-cap
