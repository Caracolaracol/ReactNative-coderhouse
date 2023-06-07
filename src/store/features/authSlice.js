import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    userId: null,
    user: null
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
    },
    signIn: (state, action) => {
        console.log(`payload: ${action.payload}`)
        return {
            ...state, 
            userId: action.payload.userId,
            token: action.payload.token,

        }
    },
    signOut: (state, action) => {
        return {
            initialState
        }
    }

  },
})


export const { signUp, signIn, signOut } = authSlice.actions
export const selectAuth = (state) => state.auth.token
export const selectId = (state) => state.auth.userId
export const selectUserData = (state) => state.auth.user
export default authSlice.reducer