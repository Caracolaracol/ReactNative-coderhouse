import { createSlice } from '@reduxjs/toolkit'

import Place from '../../models/Place'


const initialState = {
    places: []
}


export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        addPlace: async (state, action) => {
            console.log(`lng: ${typeof(action.payload.lng)} lat:${typeof(action.payload.lng)} image: ${typeof(action.payload.image)} title:${typeof(action.payload.title)}`)
            const newPlace = new Place(
                Date.now(),
                action.payload.title,
                action.payload.image,
                action.payload.lat,
                action.payload.lng
            )
            return {
                ...state,
                places: state.places.concat(newPlace)
            }
        },
    },
})


/* export const {  } = bookingsSlice.actions */
export const {addPlace} = placesSlice.actions
export const selectPlaces = (state) => state.places.places
export default placesSlice.reducer