import { createSlice } from "@reduxjs/toolkit";

const initialState = { roles:[], users: [] };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.roles = action.payload;  // Direct mutation
    },
    getAllUsers: (state, action) => {
      state.users = action.payload;  // Direct mutation
    },
  },
});

export const { setRole, getAllUsers } = userSlice.actions;
export default userSlice.reducer;
