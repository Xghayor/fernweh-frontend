import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginUser = createAsyncThunk('login/user', async (credential) => {
    const response = await axios.post('/login', credential, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => {
        throw error;
    });

    return response.data;
});

const initialState = {
    isLoading: false,
    user: null,
    token: null,
    error: null,
};

const loginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.user = null;
            state.token = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.token = null;
            state.error = action.error.message;
        });
    }
});

export { loginUser };
export default loginSlice.reducer;
