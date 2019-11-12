import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";

export const routes = {
  login: "/",
  signUp: "/signup",
  feed: "/feed",
  post: "/post"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.signUp} component={SignUpPage} />
        <Route path={routes.home} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
