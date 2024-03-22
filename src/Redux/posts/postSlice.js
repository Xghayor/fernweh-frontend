import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, createPost, updatePost, deletePost } from "./postThunk";

const initialState = {
  isLoading: false,
  posts: null,
  error: null
};

const postSlice = createSlice({
  name: 'Posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.posts = null;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, () => {
        console.log('Post created successfully');
      })
      .addCase(createPost.rejected, (action) => {
        console.error('Error creating post:', action.error.message);
      })
      .addCase(updatePost.fulfilled, () => {
        console.log('Post updated successfully');
        // You might want to update the state here if needed
      })
      .addCase(updatePost.rejected, (action) => {
        console.error('Error updating post:', action.error.message);
      })
      .addCase(deletePost.fulfilled, () => {
        console.log('Post deleted successfully');
        // You might want to update the state here if needed
      })
      .addCase(deletePost.rejected, (action) => {
        console.error('Error deleting post:', action.error.message);
      });
  },
});

export default postSlice.reducer;
