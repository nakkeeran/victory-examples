import React from "react";
import Radium, { Style, StyleRoot } from "radium";

// Children
import Nav from "./components/nav";
// Settings
import { VictorySettings, VictoryTheme } from "formidable-landers";

class App extends React.Component {
  getStyles() {
    return {
      main: {
        backgroundColor: VictorySettings.palestSand,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      },
      nav: {
        padding: `${VictorySettings.gutter * 1.5}px ${VictorySettings.gutter * 2}px`
      },
      article: {
        backgroundColor: VictorySettings.whiteSand,
        flex: "1",
        padding: `${VictorySettings.gutter * 2}px`
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <StyleRoot>
        <main style={styles.main}>
          <Nav style={styles.nav}/>
          <article style={styles.article}>
            {this.props.children}
          </article>
        </main>
        <Style rules={VictoryTheme} />
      </StyleRoot>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default Radium(App); // eslint-disable-line new-cap
