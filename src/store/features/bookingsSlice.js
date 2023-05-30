import { createSlice } from '@reduxjs/toolkit'
import bookingList from '../../../src/db/bookingList'
import { URL_API } from '../../constants/database'

const initialState = {
    data: bookingList,
    searchBooking: ''
}


export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    findBooking: (state, action) => {
      return {
        ...state,
        data:action.payload
      }
    },
    resetBooking: (state) => {
      return {
        ...state,
        data:bookingList
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { findBooking, resetBooking  } = bookingsSlice.actions
export const selectBookings = (state) => state.bookings.data
export default bookingsSlice.reducer