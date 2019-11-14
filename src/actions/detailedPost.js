import axios from 'axios'

export const getPostById = (id) => async (dispatch) => {
	await axios.get(
		`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${id}`,
		{
			headers: {
				auth: window.localStorage.getItem('token')
			}
		}
    ).then((res) => {
        dispatch(displayDetailedPost(res.data.post))
    }).catch((err) => {
	})
};

export const displayDetailedPost = (post) => ({
	type: "DISPLAY_DETAILED_POST",
	payload: {
		post,
	}
});