import React from "react";
import Radium from "radium";

// VComponents
import { random, merge, range } from "lodash";
import { VictoryAxis, VictoryBar, VictoryArea } from "victory";

const labels = {
  hour: ["12:00am", "6:00am", "12:00pm", "6:00pm", "11:00pm"],
  week: ["Week 1", "Week 13", "Week 26"],
  day: ["Day 1", "Day 10", "Day 20", "Day 30", "Day 40", "Day 50", "Day 60"]
};

const buttonStyle = {
  padding: 10,
  margin: "20px 10px",
  backgroundColor: "white",
  border: "none",
  width: 60,
  height: 60,
  textAlign: "center"
};

class CandlestickDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      period: "hour",
      data: this.generateHourData(),
      labels: labels.hour,
      active: "hour"
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
    this.setState({
      period: "week",
      data: this.generateWeekData(),
      labels: labels.week,
      active: "week"});
  }

  onToggleDay() {
    this.setState({
      period: "day",
      data: this.generateDayData(),
      labels: labels.day,
      active: "day"});
  }

  onToggleHour() {
    this.setState({
      period: "day",
      data: this.generateHourData(),
      labels: labels.hour,
      active: "hour"});
  }

  render() {
    const isHour = this.state.active === "hour" ? true : false;
    const isWeek = this.state.active === "week" ? true : false;
    const isDay = this.state.active === "day" ? true : false;

    const hourStyle = merge({}, buttonStyle,
      {backgroundColor: isHour ? "aqua" : "white", color: isHour ? "white" : "black"});
    const weekStyle = merge({}, buttonStyle,
      {backgroundColor: isWeek ? "aqua" : "white", color: isWeek ? "white" : "black"});
    const dayStyle = merge({}, buttonStyle,
      {backgroundColor: isDay ? "aqua" : "white", color: isDay ? "white" : "black"});

    return (
      <div
        style={{width: "100%",
          height: "100%",
          backgroundColor: "black",
          textAlign: "center",
          margin: "0 auto"}}
      >
        <div style={{margin: "0 auto", textAlign: "center", width: 500}}>
          <button style={weekStyle} onClick={this.onToggleWeek}>1wk</button>
          <button style={dayStyle} onClick={this.onToggleDay}>1d</button>
          <button style={hourStyle} onClick={this.onToggleHour}>1hr</button>
        </div>
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
            style={{data: {fill: (d) => d.open > d.close ? "red" : "aqua",
            width: 5}}}
          />
          <VictoryAxis
            scale={"time"}
            standalone={false}
            tickValues={this.state.labels}
            style={{axis: {stroke: "white"}, ticks: {stroke: "white"}, tickLabels: {fill: "white"}}}
          />
        </svg>
      </div>
    );
  }
}

export default Radium(CandlestickDashboard); // eslint-disable-line new-cap
