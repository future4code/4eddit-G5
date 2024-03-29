import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { push } from "connected-react-router"
import { routes } from "../containers/Router";
import { connect } from "react-redux";
import FeedPage from "../containers/FeedPage";
import PostPage from "../containers/PostPage";

class ProtectRouter extends Component {

    render(){
        const token = window.localStorage.getItem("token")

        const Router = token === null?
                        this.props.goLogin():
                        <Route path={this.props.path} component={this.props.component} />
        return(
            <div>
                {Router}
            </div>
        )
    }

}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    goLogin: () => dispatch(push(routes.login)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProtectRouter);