// src/features/registration/registrationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null, // Store the user ID here
//   otpStatus: false, // Optional: Track OTP verification status
 };

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    resetRegistration: (state) => {
      state.userId = null;
      state.otpStatus = false;
    },
    setOtpStatus: (state, action) => {
      state.otpStatus = action.payload;
    },
  },
});

export const { setUserId, resetRegistration, setOtpStatus } = registrationSlice.actions;
export default registrationSlice.reducer;
