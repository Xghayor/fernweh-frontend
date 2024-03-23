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
 
  const userData = JSON.stringify({ user, token });
  document.cookie = `userData=${encodeURIComponent(userData)};`;
  return { user, token };
});


const getUser = createAsyncThunk('get/User', async (userId, { getState }) => {
  const state = getState();
  const token = state.login.token;

  const response = await axios.get(`http://127.0.0.1:3001/api/v1/users/${userId}`, {
    headers: {
      'Authorization': `${token}`
    }
  });
  return response.data;
});


const userData = JSON.parse(decodeURIComponent(document.cookie?.split('=')[1] || 'null'));

const initialState = {
  isLoading: false,
  user: userData?.user || null,
  token: userData?.token || null,
  error: null
};


const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    }
  },
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
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export const { logout } = loginSlice.actions;
export { loginUser, getUser };
export default loginSlice.reducer;
