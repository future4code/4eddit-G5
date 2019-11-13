import axios from 'axios'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";

export const createPost = (post) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const data = {
        text: post,
    }
    const res = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts`, data, { headers: { auth: token } })
    console.log(res)
}

export const getPosts = () => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts`, { headers: { auth: token } })

    console.log(res.data)
    dispatch({type: "GET_POSTS",
              payload:{posts: res.data.posts}  })
}