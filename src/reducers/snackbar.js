const initialState = {
    open: false,
    message: "",
    state: "",
    
}

const snackbar = (state= initialState, action) => {
    console.log(action.type)
    switch(action.type){
        case "CHANGE_SNACKBAR":
            const newSnackbar = {
                open: true,
                message: action.payload.message,
                state: action.payload.state,
            }
            return {state:newSnackbar}
        case "CLOSE_SNACKBAR":
            return {state:{...state, open:false}}
        default:
            return state
    }
}

export default snackbar