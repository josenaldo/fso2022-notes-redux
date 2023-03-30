import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '@/reducers/noteReducer'
import Note from '@/components/Note'

const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state)

  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </div>
  )
}

export default Notes
