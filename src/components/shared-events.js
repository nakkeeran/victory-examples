import React from "react";
import Radium from "radium";
import { merge } from "lodash";

// VComponents
import { VictoryBar, VictoryStack, VictoryLine,
VictorySharedEvents } from "victory";

class SharedEvents extends React.Component {
  render() {
    const parentStyle = {border: "1px solid #ccc", margin: "2%", maxWidth: "40%"};
    const data = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}, {x: 4, y: 4}];
    return (
      <div>
        {/**
        * Shared events can be implemented using the VictorySharedEvents component
        * to wrap the chart components that should share events.
        */}
          <svg width={1000} height={600} style={{parent: parentStyle}}>
            <VictorySharedEvents
              events={[
                {
                  childName: "firstBar",
                  target: "data",
                  eventKey: 0,
                  eventHandlers: {
                    onClick: () => {
                      return {
                        target: "labels",
                        eventKey: 0,
                        mutation: () => {
                          return {text: "HEY"};
                        }
                      };
                    }
                  }
                },
                {
                  childName: "firstBar",
                  target: "data",
                  eventKey: 1,
                  eventHandlers: {
                    onClick: () => {
                      return [
                        {
                          childName: "secondBar",
                          mutation: (props) => {
                            return {style: merge({}, props.style, {fill: "blue"})};
                          }
                        },
                        {
                          target: "labels",
                          eventKey: 1,
                          mutation: () => {
                            return {text: "WHAT'S"};
                          }
                        }
                      ];
                    }
                  }
                },
                {
                  childName: "firstBar",
                  target: "data",
                  eventKey: 2,
                  eventHandlers: {
                    onClick: () => {
                      return {
                        target: "labels",
                        eventKey: 2,
                        mutation: () => {
                          return {text: "UP"};
                        }
                      };
                    }
                  }
                },
                {
                  childName: "firstBar",
                  target: "data",
                  eventKey: 3,
                  eventHandlers: {
                    onClick: () => {
                      return {
                        target: "labels",
                        eventKey: 3,
                        mutation: () => {
                          return {text: "HELLO"};
                        }
                      };
                    }
                  }
                },
                {
                  childName: "secondBar",
                  target: "data",
                  eventKey: 0,
                  eventHandlers: {
                    onClick: () => {
                      return [
                        {
                          childName: "firstBar",
                          mutation: (props) => {
                            return props.style.fill === "cyan" ? null :
                              {style: merge({}, props.style, {fill: "purple"})};
                          }
                        },
                        {
                          mutation: (props) => {
                            return {style: merge({}, props.style, {fill: "orange"})};
                          }
                        }
                      ];
                    }
                  }
                }
              ]}
            >
              <VictoryBar
                name="firstBar"
                style={{
                  data: {width: 25, fill: "gold"}
                }}
                data={data}
              />
              <VictoryBar
                name={"secondBar"}
                data={data}
              />
          </VictorySharedEvents>
        </svg>
        {/**
        * Shared events can also be implemented using wrapper components like
        * VictoryChart, VictoryStack, and VictoryGroup, since they use shared events
        * by default.
        */}
        <svg width={1000} height={600} style={{parent: parentStyle}}>
          <VictoryStack
            events={[
              {
                childName: "barOne",
                target: "data",
                eventHandlers: {
                  onClick: () => {
                    return [
                      {
                        childName: "line",
                        mutation: (props) => {
                          return {style: merge({}, props.style, {stroke: "blue"})};
                        }
                      }
                    ];
                  },
                  onMouseOver: () => {
                    return [
                      {
                        target: "labels",
                        mutation: () => {
                          return {text: "click me"};
                        }
                      }
                    ];
                  }
                }
              }
            ]}
          >
            <VictoryBar data={data}/>
            <VictoryBar name="barOne"/>
            <VictoryLine data={data} style={{data: {stroke: "transparent"}}} name="line"/>
          </VictoryStack>
        </svg>
      </div>
    );
  }
}

export default Radium(SharedEvents); // eslint-disable-line new-cap
