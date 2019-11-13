import React, { Component } from "react"
import { connect } from "react-redux"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { createPost } from "../actions/feed"

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
            <div>
                <TextField
                    onChange={this.handleFieldChange}
                    name="title"
                    type="text"
                    label="Title"
                    value={title}
                />
                <TextField
                    onChange={this.handleFieldChange}
                    name="text"
                    type="text"
                    label="Text"
                    value={text}
                />
               
                <Button onClick={this.createPost} variant='flat' color='primary'>Create</Button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createPost: (title, text) => dispatch(createPost(title, text)),
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);
