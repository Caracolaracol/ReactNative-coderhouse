import { createSlice } from '@reduxjs/toolkit'



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
export const {addFavourite, removeFavourite, getFavourites} = favouritesSlice.actions
export const selectFavourites = (state) => state.favourites.data
export default favouritesSlice.reducer