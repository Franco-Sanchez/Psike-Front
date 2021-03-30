import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fecthShowAppointments = createAsyncThunk('showAppointments/fetchShowAppointments', async () => {

})

const showAppointmentsSlice = createSlice({
  name: 'showAppointments',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fecthShowAppointments.pending]: (state) => {
      state.status = 'loading';
    },
    [fecthShowAppointments.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.single = action.payload.data;
      state.error = null;
    },
    [fecthShowAppointments.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
})

export default showAppointmentsSlice.reducer;