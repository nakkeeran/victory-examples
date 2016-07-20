/*
* APP
* This template is only visible when running `builder run docs-dev` locally
*/
import React from "react";
import { Link } from "react-router";
import { StyleRoot, Style } from "radium";
import { VictoryTheme } from "formidable-landers";

class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        <ul>
          <li><Link to="/custom-central-axis">Custom Central Axis</Link></li>
          <li><Link to="/custom-data-component">Custom Data Component</Link></li>
          <li><Link to="/custom-styles">Custom Styles</Link></li>
          <li><Link to="/multiple-axes">Multiple Axes</Link></li>
          <li><Link to="/tooltip">Tooltip</Link></li>
        </ul>
        {this.props.children}
        <Style rules={VictoryTheme}/>
      </StyleRoot>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
