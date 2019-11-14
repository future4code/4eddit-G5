import { getPostById } from "./detailedPost"
import axios from 'axios'
import { changeSnackbar } from './snackbar';

export const createComment = (text, id) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const data = {
        text,
    }
    const res = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${id}/comment`, data, { headers: { auth: token } })
    dispatch(getPostById(id))
}

export const voteComment = (value, id, idComment) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const data = {
        direction: value,
    }
    
    const res = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${id}/comment/${idComment}/vote`, data, { headers: { auth: token } 
    }).then((res) => {
        dispatch(getPostById(id))
        const message = "Successfully Vote"
        dispatch(changeSnackbar(message, "success"))
    }).catch((err) => {
        const message = "Error when Vote"
        dispatch(changeSnackbar(message, "error"))
    })
}
