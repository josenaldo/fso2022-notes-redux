import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useDispatch, useSelector } from 'react-redux'

import VisibilityFilter from '@/components/VisibilityFilter'
import { filterChange } from '@/reducers/filterReducer'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

describe('<VisibilityFilter />', () => {
  let user
  let dispatchMock

  let container

  beforeEach(() => {
    user = userEvent.setup()
    dispatchMock = jest.fn()
    useDispatch.mockReturnValue(dispatchMock)
    container = render(<VisibilityFilter />).container
    useSelector.mockReturnValue('ALL')
  })

  it('renders all, important and non-important radio buttons', () => {
    const allRadioButton = container.querySelector('input[value="ALL"]')
    expect(allRadioButton).toBeInTheDocument()

    const importantRadioButton = container.querySelector(
      'input[value="IMPORTANT"]'
    )
    expect(importantRadioButton).toBeInTheDocument()

    const nonImportantRadioButton = container.querySelector(
      'input[value="NONIMPORTANT"]'
    )
    expect(nonImportantRadioButton).toBeInTheDocument()
  })

  // it('renders all radio button as checked by default', () => {
  //   const allRadioButton = container.querySelector('input[value="ALL"]')
  //   expect(allRadioButton).toBeChecked()
  // })

  it('calls dispatchMock function with correct value when all radio button is clicked', async () => {
    const allRadioButton = container.querySelector('input[value="ALL"]')
    await user.click(allRadioButton)

    expect(dispatchMock).toHaveBeenCalledTimes(1)
    expect(dispatchMock).toHaveBeenCalledWith(filterChange('ALL'))
  })

  it('calls filterSelected function with correct value when important radio button is clicked', async () => {
    const importantRadioButton = container.querySelector(
      'input[value="IMPORTANT"]'
    )
    await user.click(importantRadioButton)

    expect(dispatchMock).toHaveBeenCalledWith(filterChange('IMPORTANT'))
  })

  it('calls filterSelected function with correct value when non-important radio button is clicked', async () => {
    const nonImportantRadioButton = container.querySelector(
      'input[value="NONIMPORTANT"]'
    )
    await user.click(nonImportantRadioButton)

    expect(dispatchMock).toHaveBeenCalledWith(filterChange('NONIMPORTANT'))
  })

  it('updates filter state correctly when "Important" button and then "All" button are clicked', async () => {
    const importantRadioButton = container.querySelector(
      'input[value="IMPORTANT"]'
    )
    await user.click(importantRadioButton)

    const allRadioButton = container.querySelector('input[value="ALL"]')
    await user.click(allRadioButton)

    expect(dispatchMock).toHaveBeenNthCalledWith(1, filterChange('IMPORTANT'))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, filterChange('ALL'))
  })
})
