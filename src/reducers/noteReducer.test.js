// import { createNote } from '@/reducers/noteReducer'
import { deepFreeze } from 'deep-freeze-es6'

import { configureStore } from '@reduxjs/toolkit'
import noteReducer, {
  toggleImportanceOf,
  appendNote,
  setNotes,
  initializeNotes,
  createNote,
} from '@/reducers/noteReducer'
import noteService from '@/services/notes'

jest.mock('@/services/notes')

describe('noteSlice reducer', () => {
  let store

  beforeEach(() => {
    store = configureStore({ reducer: noteReducer })
  })

  it('should toggle importance of note', () => {
    store.dispatch(
      setNotes([
        { id: '1', content: 'Test note 1', important: false },
        { id: '2', content: 'Test note 2', important: false },
      ])
    )

    store.dispatch(toggleImportanceOf('1'))
    expect(store.getState()[0].important).toBe(true)

    store.dispatch(toggleImportanceOf('1'))
    expect(store.getState()[0].important).toBe(false)
  })

  it('should append a note', () => {
    const note = { id: '1', content: 'Test note', important: false }
    store.dispatch(appendNote(note))
    expect(store.getState()).toHaveLength(1)
    expect(store.getState()[0]).toEqual(note)
  })

  it('should set notes', () => {
    const notes = [
      { id: '1', content: 'Test note 1', important: false },
      { id: '2', content: 'Test note 2', important: false },
    ]
    store.dispatch(setNotes(notes))
    expect(store.getState()).toEqual(notes)
  })
})

describe('noteSlice async actions', () => {
  let store

  beforeEach(() => {
    store = configureStore({ reducer: noteReducer })
  })

  it('should initialize notes', async () => {
    const notes = [
      { id: '1', content: 'Test note 1', important: false },
      { id: '2', content: 'Test note 2', important: false },
    ]

    noteService.getAll.mockResolvedValue(notes)

    await store.dispatch(initializeNotes())
    expect(store.getState()).toEqual(notes)
  })

  it('should create a note', async () => {
    const newNote = { id: '1', content: 'Test note', important: false }

    noteService.create.mockResolvedValue(newNote)

    await store.dispatch(createNote('Test note'))
    expect(store.getState()).toHaveLength(1)
    expect(store.getState()[0]).toEqual(newNote)
  })
})
