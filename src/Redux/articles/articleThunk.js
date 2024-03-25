import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const headers = (token) => ({
  'Content-Type': 'application/json',
  'Authorization': `${token}`
})

const fetchPosts = createAsyncThunk('fetch/posts', async (token) => {
  try {
    const response = await axios.get('http://127.0.0.1:3001/api/v1/posts', { headers: headers(token) });
    return response.data;
  } catch (error) {
    throw error;
  }
});

const axiosRequest = async (url, method, token, data = {}) => {
  try {
    await axios({
      method: method,
      url: url,
      data: data,
      headers: headers(token)
    });
  } catch (error) {
    throw error;
  }
};


const createPost = createAsyncThunk('create/Post', async ({ token, postData }) => {
  await axiosRequest('http://127.0.0.1:3001/api/v1/posts', 'post', token, postData);
});

const updatePost = createAsyncThunk('update/post', async ({ token, postId, updatedData }) => {
  await axiosRequest('http://127.0.0.1:3001/api/v1/posts/' + postId, 'put', token, updatedData);
});

const deletePost = createAsyncThunk('delete/post', async ({ token, postId }) => {
  await axiosRequest('http://127.0.0.1:3001/api/v1/posts/' + postId, 'delete', token);
});

export { fetchPosts, createPost, updatePost, deletePost };

