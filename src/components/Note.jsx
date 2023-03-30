const Note = ({ note, handleClick }) => {
  return (
    <article onClick={handleClick}>
      {note.content}
      <strong> {note.important ? 'important' : ''}</strong>
    </article>
  )
}

export default Note
