import { actionTypes } from '../constant/actionTypes'

export function addPost(post) {
    return {
        type: actionTypes.ADD_POST,
        payload: post
    }
}

export function clearPost() {
    return {
        type: actionTypes.CLEAR_POST
    }
}

export function deletePost(id) {
    return {
        type: actionTypes.DELETE_POST,
        payload: id
    }
}

export function editPost(editPost) {
    return {
        type: actionTypes.EDIT_POST,
        payload: editPost
    }
}