import React from 'react'

import NewNote from '@/components/NewNote'
import Notes from '@/components/Notes'

import './App.css'

const App = () => {
  return (
    <div className="container">
      <main>
        <h1>Notes</h1>

        <NewNote />
        <Notes />
      </main>
    </div>
  )
}

export default App
