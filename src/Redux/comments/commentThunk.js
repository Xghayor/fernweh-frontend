import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const createComment = createAsyncThunk('create/comment', async ({token, comment}) => {
    await axios.post('/post', comment, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).catch((error)=> {
        throw error
    })
})

const deleteComment = createAsyncThunk('delete/comment', async ({token, postId}) => {
    await axios.delete(`/delete/${postId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).catch((error)=> {
        throw error
    })
})

export {createComment, deleteComment};
