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
import CustomTheme from "./custom-theme/docs";

const content = document.getElementById("content");

render((
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path="/" component={App}>
      <Route path="custom-theme" component={CustomTheme}/>
    </Route>
  </Router>
), content);
