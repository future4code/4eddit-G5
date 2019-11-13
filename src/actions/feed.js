import axios from 'axios'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";

export const createPost = (post) => async (dispatch) => {
    // const token = window.localStorage.getItem("token")
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikxod0dvOFdBZW0xZ1FYb1Y0TW1HIiwidXNlcm5hbWUiOiJkYXZpIiwiZW1haWwiOiJkYXZpQGdtYWlsLmNvbSIsImlhdCI6MTU3MzU4MjM0Nn0.1q0XjJV90K9O7djYBlvp701FGkz08jOtzvohqjNFV2Y"
    const data = {
        text: post,
    }
    const res = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts`, data, { headers: { auth: token } }).catch(er => console.log(er))
    console.log(res)
}