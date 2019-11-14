import React from "react"
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import styled from 'styled-components'
import { connect } from "react-redux"
import { voteComment } from "../../actions/comment"

const PostWrapper = styled.div`
    border: 1px solid black;
    width: 70vw;
`

const Comment = styled.p`
  margin-left 5%;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    font-size: 130%;
    align-items: center;
    border-bottom: 1px solid black;
`

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid black;
`

const ButtonsSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`



 const Comments = (props) => {

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
     let colorbutton1 
     let colorbutton2 
     switch (props.comments.userVoteDirection) {
         case 0:
             colorbutton1 ="secondary"
             colorbutton2 ="secondary"
             break;
         case 1:
             colorbutton1 = "primary"
             colorbutton2 = "secondary"
                
             break;
         case -1:
             colorbutton1 = "secondary"
             colorbutton2 = "primary"
                
             break;
         default:
             break;
     }

    return (
        <PostWrapper>
            <Header>{props.comments.username}</Header>
            <section>
                <Comment>{props.comments.text}</Comment>
            </section>
            <Footer>
                <ButtonsSection>
                    <IconButton color={colorbutton1}>
                        <ThumbUp  onClick={() => changeThumbs(1, props.post.id, props.comments.id)} />
                    </IconButton>
                    <p>{props.comments.votesCount}</p>
                    <IconButton >
                        <ThumbDown color={colorbutton2} onClick={() => changeThumbs(-1, props.post.id, props.comments.id)} />
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
