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
    signIn: (state, action) => {
        /* console.log(`signIn with payload: ${action.payload.userId}`) */
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


export const { signIn, signOut } = authSlice.actions
export const selectAuth = (state) => state.auth.token
export const selectId = (state) => state.auth.userId
export const selectUserData = (state) => state.auth.user
export default authSlice.reducer