import { createSlice } from '@reduxjs/toolkit'
import bookingList from '../../db/bookingList'
import { URL_AUTH_SIGNUP } from '../../constants/database'

const initialState = {
    token: null,
    userId: null,
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action) => {
        console.log(`payload: ${action.payload.idToken}`)
        return {
            ...state, 
            userId: action.payload.localId,
            token: action.payload.idToken,
        }
        /* return async dispatch => {
            try {
                const response = await fetch(URL_AUTH_SIGNUP, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({
                        email,
                        password,
                        returnSecureToken: true
                    })
                })
                const data = await response.json()
                console.log(data)
                dispatch({
                    type:SIGNUP
                    token:
                    userId:
                })
            } catch (error){
                console.log(error)
            }
        } */
    }
  },
})

// Action creators are generated for each case reducer function
export const { signUp  } = authSlice.actions
export const selectAuth = (state) => state.auth.token
export const selectId = (state) => state.auth.userId
export default authSlice.reducer