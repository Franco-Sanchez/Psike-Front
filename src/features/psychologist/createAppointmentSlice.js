import { createSlice } from '@reduxjs/toolkit';

const createAppointmentSlice = createSlice({
  name: 'createAppointment',
  initialState: {
    item: {},
    status: 'idle'
  },
  reducers: {},
  extraReducers: {}
})

export default createAppointmentSlice.reducer;