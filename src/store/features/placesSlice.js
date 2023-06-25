import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    places: []
}


export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        addPlace: (state, action) => {
            console.log(`lng: ${typeof(action.payload.coords.lng)} lat:${typeof(action.payload.coords.lng)} image: ${typeof(action.payload.image)} title:${typeof(action.payload.title)}`)
            return {
                ...state, 
                places: [{
                    id:action.payload.id.toString(),
                    title:action.payload.title,
                    image:action.payload.image,
                    lat:action.payload.coords.lat,
                    lng:action.payload.coords.lng
                }]
            }
        },
    },
})


/* export const {  } = bookingsSlice.actions */
export const {addPlace} = placesSlice.actions
export const selectPlaces = (state) => state.places.places
export default placesSlice.reducer