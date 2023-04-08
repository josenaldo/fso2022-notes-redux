import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '@/reducers/noteReducer'
import Note from '@/components/Note'
import noteService from '@/services/notes'

const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector(({ filter, notes }) => {
    if (filter === 'ALL') {
      return notes
    }
    return filter === 'IMPORTANT'
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important)
  })

  const handleNoteClick = async (note) => {
    const noteToUpdate = {
      ...note,
      important: !note.important,
    }

    const updatedNote = await noteService.update(note.id, noteToUpdate)

    dispatch(updateNote(updatedNote))
  }

  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => handleNoteClick(note)}
        />
      ))}
    </div>
  )
}

export default Notes
