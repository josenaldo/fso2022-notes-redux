import React from 'react'

import NewNote from '@/components/NewNote'
import Notes from '@/components/Notes'
import VisibilityFilter from '@/components/VisibilityFilter'

import './App.css'

const App = () => {
  return (
    <div className="container">
      <main>
        <h1>Notes</h1>
        <NewNote />

        <VisibilityFilter />

        <Notes />
      </main>
    </div>
  )
}

export default App
