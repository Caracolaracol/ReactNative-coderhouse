import { createSlice } from '@reduxjs/toolkit'
import favouriteBookings from '../../db/favouriteBookings'

const initialState = {
    data: favouriteBookings
}


export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
        state.data.push(action.payload)
    },
    removeFavourite: (state, action ) => {
        return {
            ...state,
            data:action.payload,
        }
      },
  },
})


/* export const {  } = bookingsSlice.actions */
export const {addFavourite, removeFavourite} = favouritesSlice.actions
export const selectFavourites = (state) => state.favourites.data
export default favouritesSlice.reducer