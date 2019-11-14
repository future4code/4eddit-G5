import React, { Component } from "react"
import { connect } from "react-redux"
import CreatePost from "../../components/createPost"
import Post from "../../components/Post";
import { getPosts } from "../../actions/feed";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getPostById } from "../../actions/detailedPost";
import styled from "styled-components"
import Header from "../../components/Header";

const MainWrapper = styled.div`
  min-height: 100vh;
  background: #758595;
`


const MainConteiner = styled.form`
  width: 100%;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
  margin-top: 5vh;
`;



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
        return (
            <MainWrapper>
                <Header
                 logOffButton 
                 userInfo username={window.localStorage.getItem("username")}
                />
                <MainConteiner>
                    <CreatePost/>
                    {posts}
                </MainConteiner>
            </MainWrapper>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
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
