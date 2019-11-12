import Axios from "axios"
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const requestSignUp = (data) => async (dispatch) => {
    await Axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/signup",
        data
    ).then((res) => {
        console.log(res)
        window.localStorage.setItem('token', res.data.token);
        dispatch(push(routes.feed))
    }).catch((err) => {
        console.log(err)
    })
}