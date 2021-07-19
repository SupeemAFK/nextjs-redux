import { actionTypes } from '../constant/actionTypes'

const initialState = {
    posts: []
}

export default function postsReducer(state=initialState, { type, payload }) {
    switch (type) {
        case actionTypes.ADD_POST:
            return {...state, posts: [payload, ...state.posts]}

        case actionTypes.CLEAR_POST:
            return {...state, posts: []}

        case actionTypes.DELETE_POST:
            const updatedDeletePosts = state.posts.filter(post => post.id !== payload)
            return {...state, posts: updatedDeletePosts}

        case actionTypes.EDIT_POST:
            const updatedEditPosts = state.posts.map(post => post.id === payload.id ? payload : post)
            return {...state, posts: updatedEditPosts}

        default:
            return state
    }
}
