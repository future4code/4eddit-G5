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

        window.localStorage.setItem("token", res.data.token)
        dispatch(push(routes.feed)) 
        const message = "Successfully Login"
        dispatch(changeSnackbar(message, "success"))
    }
    catch(err){
        const message = "Error when logging"
        dispatch(changeSnackbar(message, "error"))
    }
}