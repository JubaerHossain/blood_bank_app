import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  profile: {},
}

// A slice for recipes with our 3 reducers
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: state => {
      state.loading = true
    },
    setProfileSuccess: (state, { payload }) => {
      state.profile = payload
      state.loading = false
      state.hasErrors = false
    },
    setProfileFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// A selector
export const profileSelector = state => state.profile

// Three actions generated from the slice
export const { setProfile, setProfileSuccess, setProfileFailure } = profileSlice.actions

// The reducer
export default profileSlice.reducer
