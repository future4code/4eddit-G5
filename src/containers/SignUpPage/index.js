import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import styled from "styled-components"
import { routes } from "../Router"

const LoginWrapper = styled.form`
  width: 100%;
  height: 100%;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
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
    this.setState({email: "", password: "", name: ""})
  } 

  render() {
    const { email, password, name } = this.state;

    return (
          <LoginWrapper>
            <TextField
              onChange={this.handleFieldChange}
              name="name"
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
            <Button onClick={this.autenticateLogin} variant='flat' color='primary'>Login</Button>
            <a onClick={this.props.goToLoginPage}>Return to login page</a>
          </LoginWrapper>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    requestLogin: (email, password) => dispatch(),
    goToLoginPage: () => dispatch(push(routes.login))
  }
}

export default connect(null, mapDispatchToProps)(SignUpPage);
