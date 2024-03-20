import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './auth/signupSlice';
import loginReducer from './auth/loginSlice';
import postReducer from './posts/postSlice'

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    post: postReducer
  }
});


