import React from 'react'
import { render, screen } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'
import userEvent from '@testing-library/user-event'

import Notes from '@/components/Notes'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

describe('<Notes />', () => {
  let notes
  let component
  let dispatchMock

  beforeEach(() => {
    dispatchMock = jest.fn()
    useDispatch.mockReturnValue(dispatchMock)
  })

  describe('when there are no notes', () => {
    beforeEach(() => {
      useSelector.mockReturnValue([])
      component = render(<Notes />)
    })

    it('renders no notes', () => {
      const { container } = component

      const note = container.querySelector('.note')
      expect(note).not.toBeInTheDocument()
    })
  })

  describe('when there are notes', () => {
    beforeEach(() => {
      notes = [
        {
          content: 'test content 1',
          important: true,
          id: 1,
        },
        {
          content: 'test content 2',
          important: false,
          id: 2,
        },
      ]

      useSelector.mockReturnValue(notes)
      component = render(<Notes />)
    })

    it('renders notes with correct content and importance', () => {
      const { container } = component

      const note1 = container.querySelector('#note-1')
      expect(note1).toBeInTheDocument()

      const note1Content = note1.querySelector('.note-content')
      expect(note1Content).toHaveTextContent('test content 1')

      const note1Importance = note1.querySelector('.note-importance')
      expect(note1Importance).toHaveTextContent('Important!')

      const note2 = container.querySelector('#note-2')
      expect(note2).toBeInTheDocument()

      const note2Content = note2.querySelector('.note-content')
      expect(note2Content).toHaveTextContent('test content 2')

      const note2Importance = note2.querySelector('.note-importance')
      expect(note2Importance).not.toBeInTheDocument()
    })

    it('calls dispatch function when note is clicked', async () => {
      const user = userEvent.setup()
      const { container } = component

      screen.debug()

      const note1 = container.querySelector('#note-1')
      expect(note1).toBeInTheDocument()

      await user.click(note1)

      expect(useDispatch).toHaveBeenCalled()
    })
  })
})
