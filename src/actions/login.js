import axios from 'axios'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";

export const login = (email, password) => async (dispatch) => {
    const data = {
        email,
        password,
    }
    const res = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/login`, data)

    window.localStorage.setItem("token", res.data.token)
    dispatch(push(routes.feed)) 
}