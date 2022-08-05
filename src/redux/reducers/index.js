import { combineReducers } from 'redux';
import posts from './post';
import modal from './modal';
import user from './user';


export default combineReducers({
    posts,
    modal,
    user,
})