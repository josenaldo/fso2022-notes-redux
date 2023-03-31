import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Note from '@/components/Note'

describe('Note Component', () => {
  let note
  let component
  let handleClickMock

  beforeEach(() => {
    note = {
      content: 'test content',
      important: true,
    }

    handleClickMock = jest.fn()

    component = render(<Note note={note} handleClick={handleClickMock} />)
  })

  it('renders note with correct content and importance', () => {
    expect(screen.getByText(/test content/i)).toBeInTheDocument()
    expect(screen.getByText(/important/i)).toBeInTheDocument()
  })

  it('calls handleClick function when note is clicked', async () => {
    const user = userEvent.setup()
    const noteElement = component.getByText(/test content/i)
    await user.click(noteElement)

    expect(handleClickMock).toHaveBeenCalled()
  })
})
