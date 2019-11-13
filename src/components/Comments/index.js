import React from "react"
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



const Comments = (props) => {
    return (
        <PostWrapper>
            <Header>{props.comments.username}</Header>
            <section>
                <p>{props.comments.text}</p>
            </section>
            <Footer>
                <ButtonsSection>
                    <IconButton>
                        <img src={ThumbsUp} onClick={props.onClickThumbUp} />
                    </IconButton>
                    <p>{props.comments.votesCount}</p>
                    <IconButton>
                        <img src={ThumbsDown} onClick={props.onClickThumbDown} />
                    </IconButton>
                </ButtonsSection>
            </Footer>
        </PostWrapper>
    );
}

    // "votesCount": -1,
    //     "userVoteDirection": -1,
    //     "id": "RVxZpEL8AaSaoA9nOWNF",
    //     "username": "darvas",
    //     "text": "Comentario 1!"

export default Comments;
