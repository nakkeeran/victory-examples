import React from "react";
import Radium from "radium";

class CustomDataComponents extends React.Component {
  render() {
    return (
      <div>
        Hello, world!
      </div>
    );
  }
}

export default Radium(CustomDataComponents);
