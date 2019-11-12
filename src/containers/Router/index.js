import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import ProtectRouter from "../../components/protectRoute"
import FeedPage from "../FeedPage";
import PostPage from "../PostPage";

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
        <ProtectRouter path={routes.feed} component={FeedPage} />
        <ProtectRouter path={routes.post} component={PostPage} />
        {/* <Route path={routes.feed} component={FeedPage} />
        <Route path={routes.post} component={PostPage} /> */}
        <Route path={routes.login} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Router;
