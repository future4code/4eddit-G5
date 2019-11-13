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
        console.log("dados: ", res.data)
        dispatch(displayDetailedPost(res.data.post))
    }).catch((err) => {
		console.log(err);
	})
};

export const displayDetailedPost = (post) => ({
	type: "DISPLAY_DETAILED_POST",
	payload: {
		post,
	}
});