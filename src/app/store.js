import { configureStore } from "@reduxjs/toolkit";
import PsychologistsReducer from "../features/psychologists/PsychologistsSlice";

const store = configureStore({
  reducer: {
    psychologists: PsychologistsReducer,
  },
});

export default store;
