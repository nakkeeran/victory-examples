import React from "react";
import Radium from "radium";

// VComponents
import CandlestickDashboard from "../../src/components/candlestick-dashboard";

class CandlestickDashboardDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Candlestick Dashboard</h1>
        <CandlestickDashboard />
      </div>
    );
  }
}

export default Radium(CandlestickDashboardDemo); // eslint-disable-line new-cap
