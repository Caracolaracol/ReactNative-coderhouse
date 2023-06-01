import { configureStore } from '@reduxjs/toolkit'
import bookingsSlice from './features/bookingsSlice'
import favouritesSlice from './features/favouritesSlice'
import { URL_API, URL_AUTH_SIGNUP } from '../constants/database'
import authSlice from './features/authSlice'

export default configureStore({
  reducer: {
    bookings: bookingsSlice,
    favourites: favouritesSlice,
    auth: authSlice
  },

/*   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: URL_AUTH_SIGNUP
      }
    }) */
})