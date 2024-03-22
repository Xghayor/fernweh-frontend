import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createLike = createAsyncThunk('create/like', async ({token, postId}) => {
    await axios.post(`/post/${postId}/like`, null, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).catch((error)=> {
        throw error
    })
})

const deleteLike = createAsyncThunk('delete/like', async ({token, postId}) => {
    await axios.delete(`/post/${postId}/like`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).catch((error)=> {
        throw error
    })
})


export {createLike, deleteLike}