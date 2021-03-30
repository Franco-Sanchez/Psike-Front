import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchSign = createAsyncThunk(
  "signup/fetchSign",
  async (credentials) => {
    const response = await fetch(`${BASE_URI}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    /*console.log(data);*/
    if (!response.ok) {
      throw new Error("el correo ya ha sido tomado");
    }
    console.log(data);
    return data;
  }
);

const signSlice = createSlice({
  name: "sign",
  initialState: {
    token: sessionStorage.getItem("token"),
    error: null,
  },
  reducers: {
    cleanError(state) {
      state.errors = null;
    },
  },

  extraReducers: {
    [fetchSign.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSign.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.status = "succeeded";
    },
    [fetchSign.rejected]: (state, action) => {
      state.status = "failed";
      state.errors = action.error.message;
    },
  },
});

export default signSlice.reducer;
export const { cleanError } = signSlice.actions;