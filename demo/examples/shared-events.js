import React from "react";
import Radium from "radium";

// VComponents
import SharedEvents from "../../src/components/shared-events";

class SharedEventsDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Shared Events</h1>
        <SharedEvents />
      </div>
    );
  }
}

export default Radium(SharedEventsDemo); // eslint-disable-line new-cap
