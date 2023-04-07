import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import noteService from '@/services/notes'
import { setNotes } from '@/reducers/noteReducer'

import NewNote from '@/components/NewNote'
import Notes from '@/components/Notes'
import VisibilityFilter from '@/components/VisibilityFilter'

import './App.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(setNotes(notes)))
  }, [dispatch])

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
