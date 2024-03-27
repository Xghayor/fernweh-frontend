import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createLike = createAsyncThunk('create/like', async ({ postId }, { getState }) => {
    const { token } = getState().login;
    try {
        await axios.post(`http://127.0.0.1:3001/api/v1/posts/${postId}/likes`, null, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });
    } catch (error) {
        throw error;
    }
});

const deleteLike = createAsyncThunk('delete/like', async ({ postId, likeId }, { getState }) => {
    const { token } = getState().login;
    try {
        await axios.delete(`http://127.0.0.1:3001/api/v1/posts/${postId}/likes/${likeId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });
    } catch (error) {
        throw error;
    }
});


export { createLike, deleteLike };
