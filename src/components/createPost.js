import React, { Component } from "react"
import { connect } from "react-redux"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { createPost } from "../actions/feed"

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: "",
        };
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    createPost = () => {
        const { post } = this.state;
        const { createPost } = this.props;

        createPost(post);
        this.setState({ post: "" })
    }

    render() {
        const { post } = this.state;

        return (
            <div>
                <TextField
                    onChange={this.handleFieldChange}
                    name="post"
                    type="text"
                    label="Post"
                    value={post}
                />
               
                <Button onClick={this.createPost} variant='flat' color='primary'>Create</Button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createPost: (post) => dispatch(createPost(post)),
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);
