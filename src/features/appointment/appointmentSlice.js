import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchAppointments = createAsyncThunk(
  "history/fetchAppointments",
  async (token) => {
    const response = await fetch(`${BASE_URI}/appointments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }
    return { appointments: data };
  }
);

const appointmentSlice = createSlice({
  name: "history",
  initialState: {
    error: null,
    status: "idle",
    appointments: {},
  },
  reducers: {},
  extraReducers: {
    [fetchAppointments.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAppointments.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.appointments = action.payload;
    },
    [fetchAppointments.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error;
    },
  },
});

export default appointmentSlice.reducer;
