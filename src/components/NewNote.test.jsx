import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useDispatch } from 'react-redux'

import NewNote from '@/components/NewNote'
import { createNote } from '@/reducers/noteReducer'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}))

describe('<NewNote />', () => {
  let container
  let dispatchMock

  beforeEach(() => {
    dispatchMock = jest.fn()
    useDispatch.mockReturnValue(dispatchMock)

    container = render(<NewNote />).container
  })

  it('renders form with input and submit button', () => {
    expect(container.querySelector('form')).toBeDefined()
    expect(container.querySelector('input[name="note"]')).toBeDefined()
    expect(container.querySelector('button[type="submit"]')).toBeDefined()
  })

  it('calls dispatch with correct action when form is submitted', async () => {
    const input = container.querySelector('input[name="note"]')
    const submitButton = container.querySelector('button[type="submit"]')
    const user = userEvent.setup()

    const content = 'testing'

    await user.type(input, content)
    await user.click(submitButton)

    expect(dispatchMock).toHaveBeenCalledTimes(1)
    const resultCall = dispatchMock.mock.calls[0][0]
    const expectedCall = createNote(content)

    expect(resultCall.payload.content).toBe(expectedCall.payload.content)
    expect(resultCall.type).toBe(expectedCall.type)
  })
})
