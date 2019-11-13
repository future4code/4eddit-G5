import React, { Component } from "react"
import { connect } from "react-redux"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { createComment } from "../../actions/comment"

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
            <div>
                <TextField
                    onChange={this.handleFieldChange}
                    name="text"
                    type="text"
                    label="Text"
                    value={text}
                />
                <Button onClick={this.createComment} variant='flat' color='primary'>Create</Button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createComment: (text, id) => dispatch(createComment(text, id)),
    }
}

export default connect(null, mapDispatchToProps)(CreateNewComment);
