import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import styled from "styled-components"
import { routes } from "../Router"
import { login } from "../../actions/login"
import Header from "../../components/Header"
import Card from '@material-ui/core/Card'


const MainWrapper = styled.div`
  height: 100vh;
  background: #758595;
`

const LoginMainWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`


const LoginWrapper = styled(Card)`
  width: 20%;
  height: 50%;
  gap: 10px;
  place-content: center;
  justify-items: center;
  align-items: center;
  display: grid;
  border: 1px solid black;
`;

const SignUpLink = styled.a`
  text-decoration: underline;
  :hover{cursor: pointer;}
`

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  autenticateLogin = () => {
    const { email, password } = this.state;
    const { requestLogin } = this.props;

    requestLogin(email, password);
    this.setState({email: "", password: ""})
  } 

  render() {
    const { email, password } = this.state;

    return (
        <MainWrapper>
          <Header
          />
          <LoginMainWrapper>
            <LoginWrapper>
              <TextField
                onChange={this.handleFieldChange}
                name="email"
                type="email"
                label="E-mail"
                value={email}
              />
              <TextField
                onChange={this.handleFieldChange}
                name="password"
                type="password"
                label="Password"
                value={password}
              />
              <Button onClick={this.autenticateLogin} variant='flat' color='primary'>Login</Button>
              <p>Not a user? <SignUpLink onClick={this.props.goToSignUp}>Sign up</SignUpLink></p>
            </LoginWrapper>
          </LoginMainWrapper>
        </MainWrapper>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    requestLogin: (email, password) => dispatch(login(email,password)),
    goToSignUp: () => dispatch(push(routes.signUp)),
    goFeed: () => dispatch(push(routes.feed)),
    goPost: () => dispatch(push(routes.post)),
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
