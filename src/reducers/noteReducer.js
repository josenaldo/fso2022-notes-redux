import { createSlice } from '@reduxjs/toolkit'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    createNote: (state, action) => {
      state.push(action.payload)
    },
    updateNote: (state, action) => {
      const changedNote = action.payload
      const id = changedNote.id

      return state.map((note) => (note.id !== id ? note : changedNote))
    },
    setNotes: (state, action) => {
      return action.payload
    },
  },
})

export const { createNote, updateNote, setNotes } = noteSlice.actions
export default noteSlice.reducer
