import React, {Component} from 'react'
import IconButton from '@material-ui/core/IconButton'
import ThumbUp from '@material-ui/icons/ThumbUp'
import ThumbDown from '@material-ui/icons/ThumbDown'
import styled from 'styled-components'
import { vote } from '../../actions/feed'
import { connect } from "react-redux"

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
            <PostWrapper>
                <Header>{this.props.post.title} - {this.props.post.username}</Header>
                <section>
                    <p>{this.props.post.text}</p>
                </section>
                <Footer>
                    <ButtonsSection>
                        <IconButton color={colorbutton1}>
                            <ThumbUp  onClick={()=> this.changeThumbs(1, this.props.post.id)} />
                        </IconButton>
                        <p>{this.props.post.votesCount}</p>
                        <IconButton color={colorbutton2}>
                            <ThumbDown  onClick={() => this.changeThumbs(-1, this.props.post.id)} />
                        </IconButton>
                    </ButtonsSection>
                    <p onClick={this.props.onClickGoToComments}>{this.props.post.commentsNumber} Comments</p>
                </Footer>
            </PostWrapper>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        vote: (value, id) => dispatch(vote(value, id)),
    }
}

export default connect(null, mapDispatchToProps)(Post);