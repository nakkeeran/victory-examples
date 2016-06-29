import React from "react";
import Radium from "radium";

// VComponents
import { random, merge, range } from "lodash";
import { VictoryAxis, VictoryBar, VictoryArea } from "victory";

const labels = {
  hour: ["12:00am", "6:00am", "12:00pm", "6:00pm"],
  week: ["Week 1", "Week 13", "Week 26"],
  day: ["Day 1", "Day 10", "Day 20", "Day 30", "Day 40", "Day 50", "Day 60"]
};

class CandlestickDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      period: "hour",
      data: this.generateHourData(),
      labels: labels.hour
    };

    this.onToggleDay = this.onToggleDay.bind(this);
    this.onToggleWeek = this.onToggleWeek.bind(this);
    this.onToggleHour = this.onToggleHour.bind(this);
  }

  generateDayData() {
    return range(60).map((i) => {
      return {
        x: `Day ${i + 1}`,
        open: random(150, 350),
        close: random(150, 350),
        high: random(300, 400),
        low: random(100, 200),
        volume: random(0, 100)
      };
    });
  }

  generateWeekData() {
    return range(26).map((i) => {
      return {
        x: `Week ${i + 1}`,
        open: random(150, 350),
        close: random(150, 350),
        high: random(300, 400),
        low: random(100, 200),
        volume: random(0, 100)
      };
    });
  }

  generateHourData() {
    return range(24).map((i) => {
      return {
        x: `Hour ${i + 1}`,
        open: random(150, 350),
        close: random(150, 350),
        high: random(300, 400),
        low: random(100, 200),
        volume: random(0, 100)
      };
    });
  }

  onToggleWeek() {
    this.setState({period: "week", data: this.generateWeekData(), labels: labels.week});
  }

  onToggleDay() {
    this.setState({period: "day", data: this.generateDayData(), labels: labels.day});
  }

  onToggleHour() {
    this.setState({period: "day", data: this.generateHourData(), labels: labels.hour});
  }

  render() {
    return (
      <div>
        <button onClick={this.onToggleWeek}>1wk</button>
        <button onClick={this.onToggleDay}>1d</button>
        <button onClick={this.onToggleHour}>1hr</button>
        <svg style={{width: 1200, height: 1000}} viewBox="0 0 500 300">
          <VictoryArea
            data={this.state.data.map((d) => merge({}, d,
              {yOffset: (Math.min(d.open, d.close) + d.low) / 2}))}
            standalone={false}
            domain={{y: [0, 400]}}
            y={(d) => ((Math.max(d.open, d.close) + d.high) / 2)}
            style={{data: {fill: "yellow", opacity: 0.5}}}
          />
          <VictoryBar
            data={this.state.data}
            standalone={false}
            domain={{y: [0, 400]}}
            y={"volume"}
            style={{data: {fill: (d) => d.open > d.close ? "red" : "green",
            width: 5}}}
          />
          <VictoryAxis
            scale={"time"}
            standalone={false}
            tickValues={this.state.labels}
          />
        </svg>
      </div>
    );
  }
}

export default Radium(CandlestickDashboard); // eslint-disable-line new-cap
