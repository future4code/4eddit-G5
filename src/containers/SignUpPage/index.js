import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import styled from "styled-components"
import { routes } from "../Router"
import { requestSignUp } from "../../actions/signup"
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
  display: grid;
  border: 1px solid black;
`;

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  signUp = () => {
    const { email, password, username } = this.state;
    const { requestSignUp } = this.props;

    const data = {
      email,
      password,
      username
    };

    requestSignUp(data);

    this.setState({email: "", password: "", username: ""})
  } 

  render() {
    const { email, password, name } = this.state;

    return (
      <MainWrapper>
        <Header goBack />
        <LoginMainWrapper>
          <LoginWrapper>
            <TextField
              onChange={this.handleFieldChange}
              name="username"
              type="text"
              label="Your name"
              value={name}
            />
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
            <Button onClick={this.signUp} variant='flat' color='primary'>Signup</Button>
          </LoginWrapper>
        </LoginMainWrapper>
      </MainWrapper>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    requestSignUp: (data) => dispatch(requestSignUp(data)),
  }
}

export default connect(null, mapDispatchToProps)(SignUpPage);
