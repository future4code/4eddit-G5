export const changeSnackbar = (message, state) =>({
    type: "CHANGE_SNACKBAR",
    payload: {
        message,
        state,
    }
});

export const closeSnackbar = () => ({
    type: "CLOSE_SNACKBAR",
});