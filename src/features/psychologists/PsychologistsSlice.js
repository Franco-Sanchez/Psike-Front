import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchPsychologists = createAsyncThunk(
  "psychologists/fetchPsychologists",
  async () => {
    const response = await fetch(`${BASE_URI}/psychologists`, {
      method: "GET",
    });

    const data = await response.json();
    console.log(data)
    if (!response.ok) {
      console.log(data);
      throw new Error("Something went wrong");
    }
    return { psychologists: data };
  }
);

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState: {
    status: "idle",
    error: null,
    items: [],
  },
  extraReducers: {
    [fetchPsychologists.pending]: (state, action) => {
      state.status = "loading";
    },

    [fetchPsychologists.fulfilled]: (state, action) => {
      state.status = "succeded";
      state.items = action.payload.psychologists;
    },

    [fetchPsychologists.error]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default psychologistsSlice.reducer;
