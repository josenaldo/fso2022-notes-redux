import './Note.css'

const Note = ({ note, handleClick }) => {
  return (
    <article className="note" onClick={handleClick} id={`note-${note.id}`}>
      <div className="note-content">{note.content}</div>
      {note.important && <div className="note-importance">Important!</div>}
    </article>
  )
}

export default Note
