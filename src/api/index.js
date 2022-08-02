import axios from 'axios';

const URL = 'https://blog-app-1109.herokuapp.com';

export const fetchPosts = () => axios.get(`${URL}/post`);
export const createPost = (payload) => axios.post(`${URL}/post`, payload);
export const updatePost = (payload) => axios.post(`${URL}/post/update`, payload);
export const deletePost = (payload) => axios.post(`${URL}/post/delete`, payload);


