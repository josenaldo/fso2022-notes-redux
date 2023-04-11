import { createSlice } from '@reduxjs/toolkit'

import noteService from '@/services/notes'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    updateNote: (state, action) => {
      const changedNote = action.payload
      const id = changedNote.id

      return state.map((note) => (note.id !== id ? note : changedNote))
    },
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes: (state, action) => {
      return action.payload
    },
  },
})

const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
}

const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.create(content)
    dispatch(appendNote(newNote))
  }
}

export { initializeNotes, createNote }
export const { updateNote, setNotes, appendNote } = noteSlice.actions
export default noteSlice.reducer
