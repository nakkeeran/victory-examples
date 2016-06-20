/*global document:false*/
import React from "react";
import { render } from "react-dom";
// When navigating routes, do not retain scroll position
import { Router, Route, applyRouterMiddleware, browserHistory } from "react-router";
import useScroll from "react-router-scroll";
// Routes
import Index from "./index";
import MultipleAxesDemo from "./examples/multiple-axes";
import CustomStylesDemo from "./examples/custom-styles";
import CustomDataComponentDemo from "./examples/custom-data-component";
import CentralAxisDemo from "./examples/custom-central-axis";

const content = document.getElementById("content");

render((
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path="/" component={Index}>
      <Route path="multiple-axes" component={MultipleAxesDemo} />
      <Route path="custom-styles" component={CustomStylesDemo} />
      <Route path="custom-data-component" component={CustomDataComponentDemo} />
      <Route path="custom-central-axis" component={CentralAxisDemo} />
    </Route>
  </Router>
), content);
