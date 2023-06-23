'use client'

import {createSlice} from '@reduxjs/toolkit';

const initialState: { user: { userID: string, isLoggedIn: boolean } } = {
  user: {
    userID: '',
    isLoggedIn: false
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("action.payload", action.payload)
      state.user = action.payload
      console.log("stete: ", state.user)
    },
    logout: (state) => {
      state.user = initialState.user
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
