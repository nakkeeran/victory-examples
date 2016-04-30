import React from "react";
import { render } from "react-dom";
import { Link } from "react-router";
import { StyleRoot } from "radium";

import Nav from "./components/nav";

class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        <Nav/>
        {this.props.children}
      </StyleRoot>
    );
  }
}

export default App;
