import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fecthShowPsychologist = createAsyncThunk('showPsychologist/fetchShowPsychologist', async () => {

})

const showPsychologistSlice = createSlice({
  name: 'showPsychologist',
  initialState: {
    single: {},
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fecthShowPsychologist.pending]: (state) => {
      state.status = 'loading';
    },
    [fecthShowPsychologist.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.single = action.payload.data;
      state.error = null;
    },
    [fecthShowPsychologist.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
})

export default showPsychologistSlice.reducer;