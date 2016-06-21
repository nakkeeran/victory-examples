/*
* APP
* This template is only visible when running `builder run docs-dev` locally
*/
import React from "react";
import { Link } from "react-router";
import { StyleRoot, Style } from "radium";

import { VictoryTheme } from "formidable-landers";

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },

  render() {
    return (
      <StyleRoot>
        <ul>
          <li><Link to="/custom-central-axis">Custom Central Axis</Link></li>
          <li><Link to="/custom-styles">Custom Styles</Link></li>
          <li><Link to="/tooltip">Tooltip</Link></li>
        </ul>
        {this.props.children}
        <Style rules={VictoryTheme}/>
      </StyleRoot>
    );
  }
});

export default App;
