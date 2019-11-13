import React, { Component } from "react"
import { connect } from "react-redux"
import CreatePost from "../../components/createPost"
import Post from "../../components/Post";
import { getPosts } from "../../actions/feed";





class FeedPage extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    componentDidMount(){
        this.props.getPosts()
    }


    render(){
        const posts = this.props.posts.map(post => (<Post onClick={this.} post={post}/>))
        console.log(posts)
        return (

            <div>
                <CreatePost/>
                {posts}
            </div>

        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
})

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
