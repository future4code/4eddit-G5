import React, { Component } from "react"
import { connect } from "react-redux"
import styled from 'styled-components'
import Comments from "../../components/Comments"
import CreateNewComment from "../../components/CreateNewComment"
import { vote } from "../../actions/feed"
import Post from "../../components/Post"
import Header from "../../components/Header"

const MainWrapper = styled.div`
  min-height: 100vh;
`

const MainConteiner = styled.div`
  width: 100vw;
  gap: 20px;
  place-content: center;
  justify-items: center;
  display: grid;
  margin-top: 5vh;
`;

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
`

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid black;
`

const ButtonsSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Comment = styled.p`
    margin-right: 2%;
`;




class PostPage extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    changeThumbs = (value, id) => {
        const { vote } = this.props
        const userVote = this.props.post.userVoteDirection

        switch (userVote) {
            case 0:
                vote(value, id)
                break;
            case 1:
                if (value === -1)
                    vote(0, id)
                break;
            case -1:
                if (value === 1)
                    vote(0, id)
                break;
            default:
                break;
        }
    }


    render(){
        const { post } = this.props
        return (
            <MainWrapper>
                <Header logOffButton goBack />
                <MainConteiner>
                    <PostWrapper>
                        <Post post={post}/>
                    </PostWrapper>
                        <CreateNewComment id={this.props.post.id} />   
                        {this.props.post.comments.map((comment) => {
                            return (<Comments comments={comment} />)
                        })}
                </MainConteiner>
            </MainWrapper>
        );
    }
}

const mapStateToProps = state => ({
    post: state.posts.post,
})

function mapDispatchToProps(dispatch) {
    return {
        vote: (value, id) => dispatch(vote(value, id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
