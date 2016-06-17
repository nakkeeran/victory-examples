/*global document:false*/
import React from "react";
import { render } from "react-dom";
import { Router, Route, useRouterHistory } from "react-router";
// When navigating routes, do not retain scroll position
import createBrowserHistory from "history/lib/createBrowserHistory";
import useScroll from "scroll-behavior/lib/useStandardScroll";
const appHistory = useScroll(useRouterHistory(createBrowserHistory))();
// Routes
import Index from "./index";
import MultipleAxesDemo from "./examples/multiple-axes";
import CustomStylesDemo from "./examples/custom-styles";
import CustomDataComponentDemo from "./examples/custom-data-component";

const content = document.getElementById("content");

render((
  <Router history={appHistory}>
    <Route path="/" component={Index}>
      <Route path="multiple-axes" component={MultipleAxesDemo} />
      <Route path="custom-styles" component={CustomStylesDemo} />
      <Route path="custom-data-component" component={CustomDataComponentDemo} />
    </Route>
  </Router>
), content);
