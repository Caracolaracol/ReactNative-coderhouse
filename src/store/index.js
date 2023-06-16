import { configureStore } from '@reduxjs/toolkit'
import bookingsSlice from './features/bookingsSlice'
import favouritesSlice from './features/favouritesSlice'
import authSlice from './features/authSlice'
import placesSlice from './features/placesSlice'

export default configureStore({
  reducer: {
    bookings: bookingsSlice,
    favourites: favouritesSlice,
    auth: authSlice,
    places:placesSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['places/addPlace'],
        ignoredPaths: ['places.places'],
      },
    }),
})