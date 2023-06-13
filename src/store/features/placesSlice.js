import { createSlice } from '@reduxjs/toolkit'

import Place from '../../models/Place'


const initialState = {
    places: []
}


export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        addPlace: (state, action) => {
            const newPlace = new Place(
                Date.now(),
                action.payload.title,
                action.payload.image,
                action.payload.address,
                action.payload.lat,
                action.payload.lng
            )
            return {
                ...state,
                places: state.places.concat(newPlace)
            }
        }
    },
})


/* export const {  } = bookingsSlice.actions */
export const {addPlace} = placesSlice.actions
export const selectPlaces = (state) => state.places.places
export default placesSlice.reducer