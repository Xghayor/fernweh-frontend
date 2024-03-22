import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginUser = createAsyncThunk('login/user', async (credential) => {
  const response = await axios.post('http://127.0.0.1:3001/login', credential, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const token = response.headers['authorization'];
  const user = response.data.data;
  return { user, token };
});

const getUser = createAsyncThunk('get/User', async ({ token, userId }) => {
  const response = await axios.get(`http://127.0.0.1:3001/api/v1/users/${userId}`, {
    headers: {
      'Authorization': `${token}`
    }
  });
  return response.data;
});

const initialState = {
  isLoading: false,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  token: localStorage.getItem('token') || null,
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
        state.token = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.token = null;
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export { loginUser, getUser };
export default loginSlice.reducer;
