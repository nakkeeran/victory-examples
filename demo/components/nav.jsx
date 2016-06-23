import React from "react";
import Radium from "radium";
import { Link } from "react-router";

const RadiumLink = Radium(Link); // eslint-disable-line new-cap

// Settings
import { VictorySettings } from "formidable-landers";

class Nav extends React.Component {
  getStyles() {
    return {
      nav: {
        backgroundColor: VictorySettings.darkMud,
        color: VictorySettings.paleSand,
        display: "flex",
        flexDirection: "row",
        fontFamily: VictorySettings.sansSerif,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%"
      },
      heading: {
        margin: 0,
        fontSize: "0.8em",
        letterSpacing: "0.15em",
        lineHeight: 1,
        textTransform: "uppercase"
      },
      list: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        listStyleType: "none",
        margin: 0,
        padding: `0 ${VictorySettings.gutter}px`
      },
      listItem: {
        marginRight: `${VictorySettings.gutter}px`
      },
      link: {
        borderColor: VictorySettings.darkerSand,
        color: VictorySettings.paleSand,
        textDecoration: "none",
        ":hover": {
          borderColor: VictorySettings.whiteSand,
          color: VictorySettings.whiteSand
        }
      },
      active: {
        borderBottom: "none",
        boxShadow: "none",
        color: VictorySettings.whiteSand,
        cursor: "default",
        ":hover": {
          borderBottom: "none"
        }
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <nav style={[styles.nav, this.props.style]}>
        <p style={styles.heading}>Tutorials: </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <RadiumLink to="multiple-axes" activeStyle={styles.active} style={styles.link}>
              Multiple Axes
            </RadiumLink>
          </li>
          <li style={styles.listItem}>
            <RadiumLink to="custom-styles" activeStyle={styles.active} style={styles.link}>
              Custom Styles
            </RadiumLink>
          </li>
          <li style={styles.listItem}>
            <RadiumLink to="custom-data-component" activeStyle={styles.active} style={styles.link}>
              Custom Data Component
            </RadiumLink>
          </li>
          <li style={styles.listItem}>
            <RadiumLink to="custom-central-axis" activeStyle={styles.active} style={styles.link}>
              Custom Central Axis
            </RadiumLink>
          </li>
          <li style={styles.listItem}>
            <RadiumLink to="tooltip" activeStyle={styles.active} style={styles.link}>
              Tooltip
            </RadiumLink>
          </li>
          <li style={styles.listItem}>
            <RadiumLink to="shared-events" activeStyle={styles.active} style={styles.link}>
              Shared Events
            </RadiumLink>
          </li>
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  style: React.PropTypes.object
};

Nav.defaultProps = {
  style: null
};


export default Radium(Nav); // eslint-disable-line new-cap
