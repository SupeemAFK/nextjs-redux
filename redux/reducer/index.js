import { combineReducers } from 'redux';
import postsReducer from '../reducer/postsReducer';

export const reducers = combineReducers({
    posts: postsReducer
})