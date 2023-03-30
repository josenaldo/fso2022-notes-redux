import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNote, toggleImportanceOf } from '@/reducers/noteReducer'

import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state)

  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''

    dispatch(createNote(content))
  }

  const handleNoteClick = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  return (
    <div className="container">
      <main>
        <h1>Notes</h1>

        <article>
          <form onSubmit={addNote}>
            <input name="note" />
            <button type="submit">Add</button>
          </form>
        </article>

        <div>
          {notes.map((note) => (
            <article key={note.id} onClick={() => handleNoteClick(note.id)}>
              {note.content}{' '}
              <strong>{note.important ? 'important' : ''}</strong>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
