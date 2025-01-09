import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
});

export default rootReducer;
