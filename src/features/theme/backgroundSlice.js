import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'day'
}

export const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === 'day' ? 'night' : 'day'
    }
  }
})

export const backgroundSelector = state => state.background.value

export const { toggle } = backgroundSlice.actions

export default backgroundSlice.reducer
