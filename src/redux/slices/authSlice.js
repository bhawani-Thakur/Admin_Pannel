import { createSlice } from "@reduxjs/toolkit";

const initialState = { authStatus: false, userData: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authStatus = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.authStatus = false;
      state.userData = null;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
