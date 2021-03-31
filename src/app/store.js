import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../features/session/sessionSlice';
import signReducer from '../features/signup/signSlice';
import quotesReducer from '../features/quotes/quotesSlice'

export default configureStore({
  reducer: {
    session:sessionReducer,
    signup: signReducer,
    quotes: quotesReducer
  }
})
