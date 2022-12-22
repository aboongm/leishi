import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isLoggedIn: false },
  reducers: {
    setCredentials: (state, action) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          user: action.payload.user,
          token: action.payload.token,
          isLoggedIn: action.payload.isLoggedIn,
        }),
      );
      //   state.user = action.payload.user;
      //   state.token = action.payload.token;
      //   state.isLoggedIn = action.payload.isLoggedIn;
    },
    logOut: (state) => {
      localStorage.clear();
      //   state.user = null;
      //   state.token = null;
      //   state.isLoggedIn = false;
      console.log(state);
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
