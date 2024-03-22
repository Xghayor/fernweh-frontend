import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const registerUser = createAsyncThunk('post/registeruser', async (credentials) => {
  await axios.post('http://127.0.0.1:3001/signup', credentials, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
});

const initialState = {
  isLoading: false,
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export {registerUser}
export default registerSlice.reducer;
