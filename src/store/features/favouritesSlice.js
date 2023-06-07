import { createSlice } from '@reduxjs/toolkit'
import favouriteBookings from '../../db/favouriteBookings'



const initialState = {
    data: []
}


export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    getFavourites: (state, action) => {

      return {
        ...state,
        data:action.payload,
      }
    },

    addFavourite: (state, action) => {
      if (state.data == undefined) {
        return { data: [action.payload.idfoundData] };
      }
      const updateFavs = [...state.data, action.payload.idfoundData];
      return { ...state, data: updateFavs };
    },

    removeFavourite: (state, action ) => {

      const cleanFav = [...state.data].filter(
        item => item !== action.payload.id
      );
      return { ...state, data: cleanFav};
      },

    setFavourites: (state, action) => {
      return {
        initialState
      }
    }
    },
})


/* export const {  } = bookingsSlice.actions */
export const {addFavourite, removeFavourite, getFavourites, setFavourites} = favouritesSlice.actions
export const selectFavourites = (state) => state.favourites.data
export default favouritesSlice.reducer