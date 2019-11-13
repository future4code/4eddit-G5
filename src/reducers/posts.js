const initialState = {
    posts: [],
    post: {comments: [],}
}

const posts = (state= initialState, action) => {
    switch(action.type){
        case "GET_POSTS":
            return {...state, posts: action.payload.posts}
        case "DISPLAY_DETAILED_POST":
            return {...state, post: action.payload.post}
        default:
            return state
    }
}

export default posts