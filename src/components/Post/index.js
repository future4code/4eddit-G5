import React, {Component} from 'react'
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import styled from 'styled-components'
import { vote } from '../../actions/feed'
import { connect } from "react-redux"
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'



const StyledCard = styled(Card)`
    border: 1px solid black;
    width: 70%;
`

const StyledCardActions = styled(CardActions)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 5% 0 0;
`

const ButtonsSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    changeThumbs = (value, id)=> {
        const {vote} = this.props
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
        
        let colorbutton1
        let colorbutton2
        switch (this.props.post.userVoteDirection) {
            case 0:
                colorbutton1 = "secondary"
                colorbutton2 = "secondary"
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

        return(
            <StyledCard>
                <CardHeader title={this.props.post.title} subheader={this.props.post.username} />
                <Divider />
                <CardContent>
                    <Typography>{this.props.post.text}</Typography>
                </CardContent>
                <Divider />
                <StyledCardActions>
                    <ButtonsSection>
                        <IconButton color={colorbutton1}>
                            <ThumbUp  onClick={()=> this.changeThumbs(1, this.props.post.id)} />
                        </IconButton>
                        <p>{this.props.post.votesCount}</p>
                        <IconButton color={colorbutton2}>
                            <ThumbDown  onClick={() => this.changeThumbs(-1, this.props.post.id)} />
                        </IconButton>
                    </ButtonsSection>
                    <Typography onClick={this.props.onClickGoToComments}>{this.props.post.commentsNumber} Comments</Typography>
                </StyledCardActions>
            </StyledCard>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        vote: (value, id) => dispatch(vote(value, id)),
    }
}

export default connect(null, mapDispatchToProps)(Post);