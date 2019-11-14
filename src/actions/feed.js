import axios from 'axios'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";
import { getPostById } from './detailedPost';
import { changeSnackbar } from './snackbar';

export const createPost = (title, text) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const data = {
        title,
        text
    }
    const res = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts`,
        data, 
        { headers: { auth: token } }
    ).then((res) => {
        dispatch(getPosts())
        const message = "New post created susccessfully"
        dispatch(changeSnackbar(message, "success"))
    }).catch((err) => {
        const message = "An error has occured. Please, try again."
        dispatch(changeSnackbar(message, "error"))
    })
    
}

export const getPosts = () => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts`, { headers: { auth: token } })

    dispatch({type: "GET_POSTS",
              payload:{posts: res.data.posts}  })
}

export const vote = (value, id) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const data = {
        direction: value,
    }
    const res = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${id}/vote`, data, { headers: { auth: token }
    }).then((res) => {
        dispatch(getPosts())
        dispatch(getPostById(id))
        const message = "Successfully Vote"
        dispatch(changeSnackbar(message, "success"))
    }).catch((err) => {
        const message = "Error when Vote"
        dispatch(changeSnackbar(message, "error"))
    })
}