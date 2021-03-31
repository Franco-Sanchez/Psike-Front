import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchCreateAppointment = createAsyncThunk(
  "createAppointment/fetchCreateAppointment",
  async ({ token }) => {
    const response = await fetch(`${BASE_URI}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    const data = await response.json();
    console.log(data);
    if(!response.ok) {
      throw new Error(data);
    }

    return data;
  }
);

const createAppointmentSlice = createSlice({
  name: "createAppointment",
  initialState: {
    item: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCreateAppointment.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCreateAppointment.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.item = action.payload.data;
      state.error = null;
    },
    [fetchCreateAppointment.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default createAppointmentSlice.reducer;