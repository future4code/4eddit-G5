import React, { Component } from "react"
import { connect } from "react-redux"
import IconButton from '@material-ui/core/IconButton'
import ThumbsUp from '../../style/thumb_up-24px.svg'
import ThumbsDown from '../../style/thumb_down-24px.svg'
import styled from 'styled-components'
import Comments from "../../components/Comments"
import CreateNewComment from "../../components/CreateNewComment"
import { vote } from "../../actions/feed"

const MainConteiner = styled.div`
  width: 100vw;
  gap: 20px;
  place-content: center;
  justify-items: center;
  display: grid;
  margin-top: 5vh;
`;

const PostWrapper = styled.div`
    border: 1px solid black;
    width: 70vw;
`

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 130%;
    border-bottom: 1px solid black;
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

const Post = styled.p`
    margin-left: 5%;
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

        return (
            <MainConteiner>
                <PostWrapper>
                    <Header>{this.props.post.title} - {this.props.post.username}</Header>
                    <section>
                        <Post>{this.props.post.text}</Post>
                    </section>
                    <Footer>
                        <ButtonsSection>
                            <IconButton>
                                <img src={ThumbsUp} onClick={() => this.changeThumbs(1, this.props.post.id)} />
                            </IconButton>
                            <p>{this.props.post.votesCount}</p>
                            <IconButton>
                                <img src={ThumbsDown} onClick={() => this.changeThumbs(-1, this.props.post.id)} />
                            </IconButton>
                        </ButtonsSection>
                        <Comment>{this.props.post.commentsNumber} Comments</Comment>             
                    </Footer>
                </PostWrapper>
                <CreateNewComment id={this.props.post.id} />   
                {this.props.post.comments.map((comment) => {
                    return (<Comments comments={comment} />)
                })}
            </MainConteiner>
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
