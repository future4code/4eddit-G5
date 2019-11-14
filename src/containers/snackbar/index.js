import React from "react"
import { connect } from "react-redux"
import Router from "../Router";
import {history} from "../App"
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import { closeSnackbar } from "../../actions/snackbar";


const variantIcon = {
    success: CheckCircleIcon,
    error: ErrorIcon,
};

const styles1 = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
});

function MySnackbarContent(props) {
    const { classes, className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={classNames(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={classNames(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={onClose}
                >
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);


const SnackbarComponent = (props) => {
    console.log(props.message)
    return (
        <div>
            <Router history={history} />
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={props.open}
                autoHideDuration={6000}
                onClose={props.closeSnackbar}
            >
                <MySnackbarContentWrapper
                    onClose={props.closeSnackbar}
                    variant={props.state}
                    message={props.message}
                />
            </Snackbar>
        </div>
    );
}
const mapStateToProps = state => {
    console.log(state.snackbar)
    return({
        open: state.snackbar.open,
        message: state.snackbar.message,
        state: state.snackbar.state,
})
}

function mapDispatchToProps(dispatch) {
    return {
        closeSnackbar: () => dispatch(closeSnackbar()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarComponent);
