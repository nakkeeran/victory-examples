import React from "react";
import Radium from "radium";

// VComponents
import { random } from "lodash";
import { VictoryAxis, VictoryBar, VictoryArea } from "victory";

const dataSet = {
  week: [
    {x: "Week 1", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "Week 2", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "Week 3", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "Week 4", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "Week 5", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "Week 6", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "Week 7", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "Week 8", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "Week 9", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "Week 10", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "Week 11", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "Week 12", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)}
  ],
  day: [
    {x: "6:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "7:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "8:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "9:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "10:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "11:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "12:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "1:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "2:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "3:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "4:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "5:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "6:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "4:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)}
  ],
  hour: [
    {x: "6:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "7:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "8:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "9:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "10:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "11:00am", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "12:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "1:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "2:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "3:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "4:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "5:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)},
    {x: "6:00pm", open: 20, close: 34, high: 80, low: 15, volume: random(0, 100)}
  ]
};

const labels = {
  hour: ["6:00am", "12:00pm", "6:00pm"],
  week: ["Week 1", "Week 4", "Week 8", "Week 12"],
  day: ["Day 1", "Day 7", "Day 14"]
};

class CandlestickDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      period: "hour",
      data: [],
      labels: labels.hour
    };

    this.onToggleDay = this.onToggleDay.bind(this);
    this.onToggleWeek = this.onToggleWeek.bind(this);
    this.onToggleHour = this.onToggleHour.bind(this);
  }

  onToggleWeek() {
    this.setState({period: "week", data: dataSet.week, labels: labels.week});
  }

  onToggleDay() {
    this.setState({period: "day", data: dataSet.day, labels: labels.day});
  }

  onToggleHour() {
    this.setState({period: "day", data: dataSet.hour, labels: labels.hour});
  }

  render() {
    return (
      <div>
        <button onClick={this.onToggleWeek}>1wk</button>
        <button onClick={this.onToggleDay}>1d</button>
        <button onClick={this.onToggleHour}>1hr</button>
        <svg style={{width: "100%", height: "auto"}} viewBox="0 0 500 300">
          <VictoryBar
            data={this.state.data}
            y={"volume"}
          />
          <VictoryAxis
            scale={"time"}
            tickValues={this.state.labels}
          />
        </svg>
      </div>
    );
  }
}

export default Radium(CandlestickDashboard); // eslint-disable-line new-cap
