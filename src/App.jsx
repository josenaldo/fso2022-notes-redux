import React from 'react'
import './App.css'

function App({ store }) {
  return (
    <div className="container">
      <main>
        <h1>Notes</h1>
        <div>
          {store.getState().map((note) => (
            <article key={note.id}>
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
