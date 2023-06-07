import { createSlice } from '@reduxjs/toolkit'
import bookingList from '../../../src/db/bookingList'

const initialState = {
    data: bookingList,
    searchBooking: ''
}


export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    findBooking: (state, action) => { // 
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
    },
    getBookingList: (state, action) => {
      return {
        ...state,
        data:action.payload
      }
    }
  },
})

export const { findBooking, resetBooking, getBookingList  } = bookingsSlice.actions
export const selectBookings = (state) => state.bookings.data
export default bookingsSlice.reducer