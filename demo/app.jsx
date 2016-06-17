/*global document:false*/
import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
// Routes
import Index from "./index";
import MultipleAxes from "./tutorials/multiple-axes";
import CustomTheme from "./tutorials/custom-theme";
import CustomDataComponent from "./tutorials/custom-data-component";
import CentralAxis from "./tutorials/custom-central-axis";
import Tooltip from "./tutorials/tooltip";

const content = document.getElementById("content");

render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <Route path="multiple-axes" component={MultipleAxes} />
      <Route path="custom-theme" component={CustomTheme} />
      <Route path="custom-data-component" component={CustomDataComponent} />
      <Route path="custom-central-axis" component={CentralAxis} />
      <Route path="tooltip" component={Tooltip} />
    </Route>
  </Router>
), content);
