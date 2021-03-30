import { createSlice } from '@reduxjs/toolkit';

const showAppointmentsSlice = createSlice({
  name: 'showAppointments',
  initialState: {
    items: [],
    status: 'idle'
  },
  reducers: {},
  extraReducers: {}
})

export default showAppointmentsSlice.reducer;