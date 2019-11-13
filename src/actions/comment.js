import { getPostById } from "./detailedPost"
import axios from 'axios'

export const createComment = (text, id) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const data = {
        text,
    }
    const res = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${id}/comment`, data, { headers: { auth: token } })
    dispatch(getPostById(id))
}