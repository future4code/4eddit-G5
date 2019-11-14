import axios from 'axios'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";
import { changeSnackbar } from './snackbar';

export const login = (email, password) => async (dispatch) => {
    const data = {
        email,
        password,
    }
    try{ const res = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/login`, data)
        window.localStorage.setItem("username", res.data.user.username)
        window.localStorage.setItem("token", res.data.token)
        dispatch(push(routes.feed)) 
        const message = "Successfully logged in"
        dispatch(changeSnackbar(message, "success"))
    }
    catch(err){
        const message = "Error when logging in"
        dispatch(changeSnackbar(message, "error"))
    }
}
