import React, { Component } from "react"
import { connect } from "react-redux"
import CreatePost from "../../components/createPost"
import Post from "../../components/Post";
import { getPosts } from "../../actions/feed";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getPostById } from "../../actions/detailedPost";





class FeedPage extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    componentDidMount(){
        this.props.getPosts()
    }


    render(){
        const posts = this.props.posts.map(post => (<Post onClickGoToComments={() => this.props.goToPosts(post.id)} post={post}/>))
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
        getPosts: () => dispatch(getPosts()),
        goToPosts: (id) => {
            dispatch(getPostById(id));
            dispatch(push(routes.post));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
