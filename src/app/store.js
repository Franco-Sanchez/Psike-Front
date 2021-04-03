import { configureStore } from "@reduxjs/toolkit";
import PsychologistsReducer from "../features/psychologists/PsychologistsSlice";
import createAppointmentReducer from "../features/appointment/createAppointmentSlice";
import showAppointmentsReducer from "../features/psychologist/showAppointmentsSlice";
import showPsychologistReducer from "../features/psychologist/showPsychologistSlice";
import sessionReducer from "../features/session/sessionSlice";
import signReducer from "../features/signup/signSlice";
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
    profile: profileReducer,
    appointment: appointmentReducer,
  },
});
