import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const headers = (token) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
})

const fetchPosts = createAsyncThunk('fetch/posts', async (token) => {
  try {
    const response = await axios.get('/posts', { headers: headers(token) });
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
  await axiosRequest('/posts', 'post', token, postData);
});

const updatePost = createAsyncThunk('update/post', async ({ token, postId, updatedData }) => {
  await axiosRequest('/posts/' + postId, 'put', token, updatedData);
});

const deletePost = createAsyncThunk('delete/post', async ({ token, postId }) => {
  await axiosRequest('/posts/' + postId, 'delete', token);
});

export { fetchPosts, createPost, updatePost, deletePost };

