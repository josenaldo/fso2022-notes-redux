import { createSlice } from '@reduxjs/toolkit'

import noteService from '@/services/notes'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    toggleImportanceOf: (state, action) => {
      const id = action.payload

      const noteToChange = state.find((n) => n.id === id)

      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }

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

export const { toggleImportanceOf, setNotes, appendNote } = noteSlice.actions

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
export default noteSlice.reducer
