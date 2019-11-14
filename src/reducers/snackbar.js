const initialState = {
    open: false,
    message: "",
    state: "",
    
}

const snackbar = (state= initialState, action) => {
    switch(action.type){
        case "CHANGE_SNACKBAR":
            const newSnackbar = {
                open: true,
                message: action.payload.message,
                state: action.payload.state,
            }
            return newSnackbar
        case "CLOSE_SNACKBAR":
            const closeSnackbar = {
                open: false,
                message: state.message,
                state: state.state,
            }
            return closeSnackbar
        default:
            return state
    }
}

export default snackbar