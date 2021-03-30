import { configureStore } from '@reduxjs/toolkit';
import createAppointmentReducer from '../features/psychologist/createAppointmentSlice';
import showAppointmentsReducer from '../features/psychologist/showAppointmentsSlice';
import showPsychologistReducer from '../features/psychologist/showPsychologistSlice';

const store = configureStore({
  reducer: {
    showPsychologist: showPsychologistReducer,
    showAppointments: showAppointmentsReducer,
    createAppointment: createAppointmentReducer
  }
})

export default store;