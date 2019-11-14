import React, { Component } from "react"
import { connect } from "react-redux"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { createComment } from "../../actions/comment"
import styled from 'styled-components'

const MainConteiner = styled.div`
  width: 70%;
  gap: 10px;
  display: grid;
  border: 1px solid black;
`;

const TextFieldStyled = styled(TextField)`
  margin: 0 5%;
`;

class CreateNewComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    createComment = () => {
        const { text } = this.state;
        const { createComment, id } = this.props;

        createComment(text, id);
        this.setState({ title: "", text: ""})
    }

    render() {
        const { text } = this.state;

        return (
            <MainConteiner>
                <TextFieldStyled
                    onChange={this.handleFieldChange}
                    name="text"
                    type="text"
                    label="Comment"
                    value={text}
                />
                <Button onClick={this.createComment} variant='flat' color='primary'>Create</Button>
            </MainConteiner>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createComment: (text, id) => dispatch(createComment(text, id)),
    }
}

export default connect(null, mapDispatchToProps)(CreateNewComment);
