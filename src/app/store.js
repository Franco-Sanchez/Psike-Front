import { configureStore } from '@reduxjs/toolkit';
import createAppointmentReducer from '../features/psychologist/createAppointmentSlice';
import showAppointmentsReducer from '../features/psychologist/showAppointmentsSlice';
import showPsychologistReducer from '../features/psychologist/showPsychologistSlice';
import sessionReducer from '../features/session/sessionSlice';
import signReducer from '../features/signup/signSlice';
import quotesReducer from '../features/quotes/quotesSlice'
import profileReducer from "../features/profile/profileSlice";

export default configureStore({
  reducer: {
    showPsychologist: showPsychologistReducer,
    showAppointments: showAppointmentsReducer,
    createAppointment: createAppointmentReducer,
    session:sessionReducer,
    signup: signReducer,
    quotes: quotesReducer,
    profile: profileReducer
  }
})
