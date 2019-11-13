import React, {Component} from 'react'
import IconButton from '@material-ui/core/IconButton'
import ThumbsUp from '../../style/thumb_up-24px.svg'
import ThumbsDown from '../../style/thumb_down-24px.svg'
import styled from 'styled-components'

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

    render(){
        return(
            <PostWrapper>
                <Header>{this.props.post.title} - {this.props.post.username}</Header>
                <section>
                    <p>{this.props.post.text}</p>
                </section>
                <Footer>
                    <ButtonsSection>
                        <IconButton>
                            <img src={ThumbsUp} onClick={this.props.onClickThumbUp} />
                        </IconButton>
                        <p>{this.props.post.votesCount}</p>
                        <IconButton>
                            <img src={ThumbsDown} onClick={this.props.onClickThumbDown} />
                        </IconButton>
                    </ButtonsSection>
                    <p onClick={this.props.onClickGoToComments}>{this.props.post.commentsNumber} Comments</p>
                </Footer>
            </PostWrapper>
        )
    }
}

export default Post;