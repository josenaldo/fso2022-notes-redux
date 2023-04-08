import noteReducer from '@/reducers/noteReducer'
import { deepFreeze } from 'deep-freeze-es6'
// import deepFreeze from 'deep-freeze'

describe('noteReducer', () => {
  it('return new state with action notes/createNote', () => {
    const state = []
    const action = {
      type: 'notes/createNote',
      payload: {
        content: 'the app state is in redux store',
        important: true,
        id: 1,
      },
    }

    deepFreeze(state)
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(1)
    const expectedContents = newState.map((s) => s.content)
    expect(expectedContents).toContain(action.payload.content)
  })

  test('returns new state with action notes/updateNote', () => {
    const state = [
      {
        content: 'the app state is in redux store',
        important: true,
        id: 1,
      },
      {
        content: 'state changes are made with actions',
        important: false,
        id: 2,
      },
    ]

    const action = {
      type: 'notes/updateNote',
      payload: {
        content: 'state changes are made with actions',
        important: true,
        id: 2,
      },
    }

    deepFreeze(state)
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(2)

    expect(newState).toContainEqual(state[0])

    expect(newState).toContainEqual({
      content: 'state changes are made with actions',
      important: true,
      id: 2,
    })
  })

  test('return new state with action notes/setNotes', () => {
    const initialState = []

    const notes = [
      {
        content: 'the app state is in redux store',
        important: true,
        id: 1,
      },
      {
        content: 'state changes are made with actions',
        important: false,
        id: 2,
      },
    ]

    const action = {
      type: 'notes/setNotes',
      payload: notes,
    }

    deepFreeze(initialState)

    const newState = noteReducer(initialState, action)

    expect(newState).toHaveLength(2)

    expect(newState).toContainEqual(notes[0])

    expect(newState).toContainEqual(notes[1])
  })
})
