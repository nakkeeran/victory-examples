import React from "react";
import Radium from "radium";

// VComponents
import Tooltip from "../../src/components/tooltip";

class MultipleAxesDemo extends React.Component {
  render() {
    /* eslint-disable max-len */
    return (
      <div>
        <h1>Tooltip</h1>
        <Tooltip />
      </div>
    );
    /* eslint-enable max-len */
  }
}

export default Radium(MultipleAxesDemo); // eslint-disable-line new-cap
