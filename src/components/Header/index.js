import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux"
import { goBack, push } from "connected-react-router"
import { routes } from '../../containers/Router'

const HeaderWrapper = styled.div`
    width: 100%;
    height: 10%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid black;
    background: #495867;
`

const SloganP = styled.p`
    color: white;
    font-size: 24pt;
`

const LeftSectionDiv = styled.div`
    grid-column: 1 / 2;
    display: flex;
    justify-content: center;
`

const CenterSectionDiv = styled.div`
    grid-column: 3 / 4;
    display: flex;
    justify-content: center;
`

const RightSectionDiv = styled.div`
    grid-column: 5 / 6;
    display: flex;
    justify-content: space-around;
`

const LinkedP = styled.p`
    :hover{cursor: pointer};
`



const Header = (props) => {

    const onClickToSignOff = () => {
        const { goToLogin } = props

        window.localStorage.clear('token');

        goToLogin()
    }
    const logOffButton = props.logOffButton ?
     <LinkedP onClick={onClickToSignOff}><u>Sign off</u></LinkedP> 
     : 
    null

    const userInfo = props.userInfo?
     <p>Hello, {props.username}</p> 
     :
    null

    const goBack = props.goBack ?
     <LinkedP onClick={props.onClickGoBackPage}><u>Go back</u></LinkedP> 
     :
    null

    return(
        <HeaderWrapper>
            <LeftSectionDiv>
                {goBack}
            </LeftSectionDiv>
            <CenterSectionDiv>
                <SloganP>4eddit - Group 5 </SloganP>
            </CenterSectionDiv>
            <RightSectionDiv>
                {userInfo}
                {logOffButton}
            </RightSectionDiv>
        </HeaderWrapper>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        onClickGoBackPage: () => dispatch(goBack()),
        goToLogin: () => dispatch(push(routes.login))
    }
}

export default connect(null, mapDispatchToProps)(Header);