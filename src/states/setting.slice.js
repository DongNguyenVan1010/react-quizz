import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: null,
  difficulty: null,
  type: null,
  amount: null,
  score: 0
}

export const settingsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload
    },
    setType: (state, action) => {
      state.type = action.payload
    },
    setAmount: (state, action) => {
      state.amount = action.payload
    },
    setSettings: (state, action) => {
      state.category = action.payload.category
      state.difficulty = action.payload.difficulty
      state.type = action.payload.type
      state.amount = action.payload.amount
    },
    setScore: (state, action) => {
      state.score = action.payload
    },
  },
})

export const { setCategory, setDifficulty, setType, setAmount, setSettings, setScore } = settingsSlice.actions;

export default settingsSlice.reducer;