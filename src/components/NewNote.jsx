import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '@/reducers/noteReducer'

const NewNote = () => {
  const dispatch = useDispatch()

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.elements.note.value
    event.target.elements.note.value = ''
    dispatch(createNote(content))
  }

  return (
    <article>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">Add</button>
      </form>
    </article>
  )
}

export default NewNote
