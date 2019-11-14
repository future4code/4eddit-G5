import React, { Component } from "react"
import { connect } from "react-redux"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { createPost } from "../actions/feed"
import styled from "styled-components"
import Card from '@material-ui/core/Card'


const StyledCard = styled(Card)`
  width: 70vw;
  gap: 5px;
  display: grid;
  border: 1px solid black;
`;

const TitleNewPost = styled.p`
  margin-left: 5%;
  font-size: 150%;
`;

const TextFieldStyled1 = styled(TextField)`
  margin-left: 5%;
  width: 20%;
`;

const TextFieldStyled2 = styled(TextField)`
  margin: 0 5%;
`;


class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: ""
        };
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    createPost = () => {
        const { title, text } = this.state;
        const { createPost } = this.props;

        createPost(title, text);
        this.setState({ title: "", text: ""})
    }

    render() {
        const { title, text } = this.state;

        return (
            <StyledCard>
                <TitleNewPost>New Post:</TitleNewPost>
                <TextFieldStyled1
                    onChange={this.handleFieldChange}
                    name="title"
                    type="text"
                    label="Title"
                    value={title}
                />
                <TextFieldStyled2
                    onChange={this.handleFieldChange}
                    name="text"
                    type="text"
                    label="Text"
                    value={text}
                />
               
                <Button onClick={this.createPost} variant='flat' color='primary'>Create</Button>
            </StyledCard>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createPost: (title, text) => dispatch(createPost(title, text)),
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);
