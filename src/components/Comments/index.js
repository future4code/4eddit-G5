import React from "react"
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import styled from 'styled-components'
import { connect } from "react-redux"
import { voteComment } from "../../actions/comment"
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const StyledCard = styled(Card)`
    border: 1px solid black;
    width: 49%;
`

const StyledCardHeader = styled(CardHeader)`
    display: flex;
    justify-content: center;
    font-size: 130%;
    align-items: center;
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
        <StyledCard>
            <StyledCardHeader title={props.comments.username} />
            <Divider />
            <CardContent>
                <Typography component="p">{props.comments.text}</Typography>
            </CardContent>
            <Divider />
            <CardActions>
                <ButtonsSection>
                    <IconButton color={colorbutton1}>
                        <ThumbUp  onClick={() => changeThumbs(1, props.post.id, props.comments.id)} />
                    </IconButton>
                    <p>{props.comments.votesCount}</p>
                    <IconButton >
                        <ThumbDown color={colorbutton2} onClick={() => changeThumbs(-1, props.post.id, props.comments.id)} />
                    </IconButton>
                </ButtonsSection>
            </CardActions>
        </StyledCard>
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
