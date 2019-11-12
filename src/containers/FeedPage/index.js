import React, { Component } from "react"
import { connect } from "react-redux"
import Post from "../../components/Post";




const FeedPage = () => {
    
    return (
        <Post />
    );
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(null, mapDispatchToProps)(FeedPage);
