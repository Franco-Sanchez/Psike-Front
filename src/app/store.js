import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice";
import sessionReducer from "../features/session/sessionSlice";
import signReducer from "../features/signup/signSlice";

export default configureStore({
  reducer: {
    session: sessionReducer,
    signup: signReducer,
    profile: profileReducer ,
  },
});
