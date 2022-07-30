import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payLoad) => payLoad, 
    getPostsFailure: (err) => err,
})

export const createPost = createActions({
    createPostRequest: (payload) => payload,
    createPostSuccess: (payload) => payload,
    createPostFailure: (err) => err,
});

export const updatePost = createActions({
    updatePostRequest: (payload) => payload,
    updatePostSuccess: (payload) => payload,
    updatePostFailure: (err) => err,
});

export const deletePost = createActions({
    deletePostRequest: (payload) => payload,
    deletePostSuccess: (payload) => payload,
    deletePostFailure: (err) => err,
});

/*
    getType(getPosts.getPostsSuccess) 
    => 
    {
        type: 'getPostsSuccess',
        payload: {
            name: 'test'
        }
    }
*/

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');
