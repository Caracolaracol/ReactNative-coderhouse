import { configureStore } from '@reduxjs/toolkit'
import bookingsSlice from './features/bookingsSlice'
import favouritesSlice from './features/favouritesSlice'
import { URL_API } from '../constants/database'

export default configureStore({
  reducer: {
    bookings: bookingsSlice,
    favourites: favouritesSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: URL_API
      }
    })
})