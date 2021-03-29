import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchLogin = createAsyncThunk(
  "session/fetchLogin",
  async (credentials) => {
    console.log(credentials);
    const response = await fetch(`${BASE_URI}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error(data.errors.message);
    }
    return { token: data.token, email: data.email };
  }
);

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    token: sessionStorage.getItem("token"),
    error: null,
  },
  reducers: {
    killToken: (state) => {
      sessionStorage.removeItem("token");
      state.token = null;
    },
  },
  extraReducers: {
    [fetchLogin.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.error = null;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    [fetchLogin.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const { killToken } = sessionSlice.actions;
export default sessionSlice.reducer;
