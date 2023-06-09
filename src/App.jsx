import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initializeNotes } from '@/reducers/noteReducer'

import NewNote from '@/components/NewNote'
import Notes from '@/components/Notes'
import VisibilityFilter from '@/components/VisibilityFilter'

import './App.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())
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
