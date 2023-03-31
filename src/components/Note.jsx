const Note = ({ note, handleClick }) => {
  return (
    <article className="note" onClick={handleClick} id={`note-${note.id}`}>
      <div className="note-content">{note.content}</div>
      <div className="note-importance">{note.important ? 'important' : ''}</div>
    </article>
  )
}

export default Note
