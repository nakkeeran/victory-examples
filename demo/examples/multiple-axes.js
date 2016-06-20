import React from "react";
import Radium from "radium";

// VComponents
import MultipleAxes from "../../src/components/multiple-axes";

class MultipleAxesDemo extends React.Component {
  render() {
    /* eslint-disable max-len */
    return (
      <div>
        <h1>Multiple Axes</h1>
        <MultipleAxes />
        <p style={{maxWidth: "38em"}} className="Copy">
          This example is not original; it is based on <a href="http://blogs.mathworks.com/loren/2013/03/27/multiple-y-axes/">the Multipe Y Axes example implemented in MATLAB</a>.
        </p>
      </div>
    );
    /* eslint-enable max-len */
  }
}

export default Radium(MultipleAxesDemo); // eslint-disable-line new-cap
