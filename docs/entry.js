/*
* ENTRY
* This template is only visible when running `builder run docs-dev` locally
*/
import React from "react";
import { render } from "react-dom";
import { Router, Route, applyRouterMiddleware, browserHistory } from "react-router";
import useScroll from "react-router-scroll";
// Routes
import App from "./app";
import CustomCentralAxis from "./custom-central-axis/docs";
import CustomDataComponent from "./custom-data-component/docs";
import CustomStyles from "./custom-styles/docs";
import MultipleAxes from "./multiple-axes/docs";
import Tooltip from "./tooltip/docs";

const content = document.getElementById("content");

render((
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path="/" component={App}>
      <Route path="custom-central-axis" component={CustomCentralAxis}/>
      <Route path="custom-data-component" component={CustomDataComponent}/>
      <Route path="custom-styles" component={CustomStyles}/>
      <Route path="multiple-axes" component={MultipleAxes}/>
      <Route path="tooltip" component={Tooltip}/>
    </Route>
  </Router>
), content);
