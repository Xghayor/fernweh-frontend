import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createComment = createAsyncThunk('create/comment', async ({commentData, postId}, { getState }) => {
    const {token} = getState().login;
    try {
        await axios.post(`http://127.0.0.1:3001/api/v1/posts/${postId}/comments`, commentData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });
    } catch (error) {
        throw error;
    }
});

const deleteComment = createAsyncThunk('delete/comment', async ({postId, commentId}, { getState }) => {
    const {token} = getState().login;
    try {
        await axios.delete(`http://127.0.0.1:3001/api/v1/posts/${postId}/comments/${commentId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });
    } catch (error) {
        throw error;
    }
});

export { createComment, deleteComment };
