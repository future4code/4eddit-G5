import React from "react"
import IconButton from '@material-ui/core/IconButton'
import ThumbsUp from '../../style/thumb_up-24px.svg'
import ThumbsDown from '../../style/thumb_down-24px.svg'
import styled from 'styled-components'
import { connect } from "react-redux"
import { voteComment } from "../../actions/comment"

const PostWrapper = styled.div`
    border: 1px solid black;
    width: 50%;
`

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;
`

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid black;
`

const ButtonsSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`



 const Comments = (props) => {
    console.log(props.post)

     const changeThumbs = (value, id, idComment) => {
            const { vote } = props
            const userVote = props.comments.userVoteDirection

            switch (userVote) {
                case 0:
                    vote(value, id, idComment)
                    break;
                case 1:
                    if (value === -1)
                        vote(0, id, idComment)
                    break;
                case -1:
                    if (value === 1)
                        vote(0, id, idComment)
                    break;
                default:
                    break;
            }
        }
    

    return (
        <PostWrapper>
            <Header>{props.comments.username}</Header>
            <section>
                <p>{props.comments.text}</p>
            </section>
            <Footer>
                <ButtonsSection>
                    <IconButton>
                        <img src={ThumbsUp} onClick={() => changeThumbs(1, props.post.id, props.comments.id)} />
                    </IconButton>
                    <p>{props.comments.votesCount}</p>
                    <IconButton>
                        <img src={ThumbsDown} onClick={() => changeThumbs(-1, props.post.id, props.comments.id)} />
                    </IconButton>
                </ButtonsSection>
            </Footer>
        </PostWrapper>
    );
}
const mapStateToProps = state => ({
    post: state.posts.post
})

function mapDispatchToProps(dispatch) {
    return {
        vote: (value, id, idComment) => dispatch(voteComment(value, id, idComment)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
