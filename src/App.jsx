import React from 'react'
import './App.css'

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

function App({ store }) {
  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''

    store.dispatch({
      type: 'NEW_NOTE',
      payload: {
        content,
        important: false,
        id: generateId(),
      },
    })
  }

  const toggleImportanceOf = (id) => {
    store.dispatch({
      type: 'TOGGLE_IMPORTANCE',
      payload: { id },
    })
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
          {store.getState().map((note) => (
            <article key={note.id} onClick={() => toggleImportanceOf(note.id)}>
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
