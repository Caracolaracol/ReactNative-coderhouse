import { configureStore } from '@reduxjs/toolkit'
import bookingsSlice from './features/bookingsSlice'
import favouritesSlice from './features/favouritesSlice'
import authSlice from './features/authSlice'

export default configureStore({
  reducer: {
    bookings: bookingsSlice,
    favourites: favouritesSlice,
    auth: authSlice
  },
})