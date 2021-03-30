import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchCreateAppointment = createAsyncThunk('createAppointment/fecthCreateAppointment', async () => {

})

const createAppointmentSlice = createSlice({
  name: 'createAppointment',
  initialState: {
    item: {},
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchCreateAppointment.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCreateAppointment.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.item = action.payload.data;
      state.error = null;
    },
    [fetchCreateAppointment.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
})

export default createAppointmentSlice.reducer;