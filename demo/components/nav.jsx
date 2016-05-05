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
        border: "none",
        boxShadow: "none",
        color: VictorySettings.whiteSand,
        cursor: "default",
        ":hover": {
          border: "none"
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();

    const links = [
      ["multiple-axes", "Multiple Axes"],
      ["custom-theme", "Custom Theme"],
      ["custom-data-components", "Custom Data Components"]
    ].map(link => {
      return (
        <li key={link[0]} style={styles.listItem}>
          {this.renderLink(link[0], link[1], styles)}
        </li>
      );
    });

    return (
      <nav style={[styles.nav, this.props.style]}>
        <p style={styles.heading}>Tutorials: </p>
        <ul style={styles.list}>
          {links}
        </ul>
      </nav>
    );
  }

  renderLink(path, displayName, styles) {
    return (
      <RadiumLink to={path} activeStyle={styles.active} style={styles.link}>
        {displayName}
      </RadiumLink>
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
