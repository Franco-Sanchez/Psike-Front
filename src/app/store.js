<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import createAppointmentReducer from '../features/psychologist/createAppointmentSlice';
import showAppointmentsReducer from '../features/psychologist/showAppointmentsSlice';
import showPsychologistReducer from '../features/psychologist/showPsychologistSlice';
import sessionReducer from '../features/session/sessionSlice';
import signReducer from '../features/signup/signSlice';
import quotesReducer from '../features/quotes/quotesSlice'
=======
import { configureStore } from "@reduxjs/toolkit";
import PsychologistsReducer from "../features/psychologists/PsychologistsSlice";
import createAppointmentReducer from "../features/psychologist/createAppointmentSlice";
import showAppointmentsReducer from "../features/psychologist/showAppointmentsSlice";
import showPsychologistReducer from "../features/psychologist/showPsychologistSlice";
import sessionReducer from "../features/session/sessionSlice";
import signReducer from "../features/signup/signSlice";
>>>>>>> 71841206b77dfdf91de74c3f67c72b859c2972e3
import profileReducer from "../features/profile/profileSlice";
import appointmentReducer from "../features/appointment/appointmentSlice";

export default configureStore({
  reducer: {
    psychologists: PsychologistsReducer,
    showPsychologist: showPsychologistReducer,
    showAppointments: showAppointmentsReducer,
    createAppointment: createAppointmentReducer,
    session: sessionReducer,
    signup: signReducer,
<<<<<<< HEAD
    quotes: quotesReducer,
    profile: profileReducer
  }
})
=======
    profile: profileReducer,
    appointment: appointmentReducer,
  },
});
>>>>>>> 71841206b77dfdf91de74c3f67c72b859c2972e3
