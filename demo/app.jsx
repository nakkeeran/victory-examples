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
import MultipleAxes from "./tutorials/multiple-axes";
import CustomTheme from "./tutorials/custom-theme";
import CustomDataComponent from "./tutorials/custom-data-component";

const content = document.getElementById("content");

render((
  <Router history={appHistory}>
    <Route path="/" component={Index}>
      <Route path="multiple-axes" component={MultipleAxes} />
      <Route path="custom-theme" component={CustomTheme} />
      <Route path="custom-data-component" component={CustomDataComponent} />
    </Route>
  </Router>
), content);
