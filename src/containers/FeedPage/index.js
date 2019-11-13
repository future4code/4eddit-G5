import React, { Component } from "react"
import { connect } from "react-redux"
import CreatePost from "../../components/createPost"
import Post from "../../components/Post";





const FeedPage = () => {
    
    return (

        <div>
            <CreatePost/>
        
      </div>

    );
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(null, mapDispatchToProps)(FeedPage);
