import { call, takeLatest, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions';
import * as api from '../../api';

function* fetchDataSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    console.log('[posts]', posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* loginSaga(action) {
  try {
    const login = yield call(api.login, action.payload);
    console.log('Login-saga: ', action.payload);

    yield put(actions.login.loginSuccess(login.data));
    console.log("data-login:", login.data);
  } catch (err) {
    console.error(err);
    yield put(actions.login.loginFailure(err));
  }
}

function* registerSaga(action) {
  try {
    const register = yield call(api.register, action.payload);
    yield put(actions.register.registerSuccess(register));
  } catch (err) {
    console.error(err);
    yield put(actions.register.registerFailure(err));
  }
}

function* createDataSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* updateDataSaga(action) {
  try {
    const updatePost = yield call(api.updatePost, action.payload);
    yield put(actions.updatePost.updatePostSuccess(updatePost.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updatePost.updatePostFailure(err));
  }
}

function* deleteDataSaga(action) {
  try {
    const deletePost = yield call(api.deletePost, action.payload);
    yield put(actions.deletePost.deletePostSuccess(deletePost.data));
  } catch (err) {
    console.error(err);
    yield put(actions.deletePost.deletePostFailure(err));
  }
}

export default function* mySaga() {

  yield takeLatest(actions.login.loginRequest, loginSaga);

  //post action
  yield takeLatest(actions.getPosts.getPostsRequest, fetchDataSaga);
  yield takeLatest(actions.createPost.createPostRequest, createDataSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updateDataSaga);
  yield takeLatest(actions.deletePost.deletePostRequest, deleteDataSaga);
  // login and register actions
  // yield takeLatest(actions.register.registerPostRequest, registerSaga);

};