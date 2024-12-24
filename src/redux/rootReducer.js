import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
import registrationSlice from "./slices/registrationSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  registration: registrationSlice,
});

export default rootReducer;
