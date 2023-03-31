import filterReducer, { filterChange } from '@/reducers/filterReducer'

describe('filterReducer', () => {
  it('should return a proper initial state when called with undefined state', () => {
    expect(filterReducer(undefined, {})).toEqual('ALL')
  })

  it('should change the value of the filter', () => {
    const initialState = 'ALL'
    const filter = 'IMPORTANT'
    const action = filterChange(filter)
    const newState = filterReducer(initialState, action)

    expect(newState).toEqual(filter)
  })
})

describe('filter actions', () => {
  it('should return an action object with type "ALL"', () => {
    const filter = 'ALL'
    const expectedAction = {
      type: 'SET_FILTER',
      payload: filter,
    }
    const newAction = filterChange(filter)
    expect(newAction).toEqual(expectedAction)
  })

  it('should return an action object with type "IMPORTANT"', () => {
    const filter = 'IMPORTANT'
    const expectedAction = {
      type: 'SET_FILTER',
      payload: filter,
    }
    const newAction = filterChange(filter)
    expect(newAction).toEqual(expectedAction)
  })

  it('should return an action object with type "NONIMPORTANT"', () => {
    const filter = 'NONIMPORTANT'
    const expectedAction = {
      type: 'SET_FILTER',
      payload: filter,
    }
    const newAction = filterChange(filter)
    expect(newAction).toEqual(expectedAction)
  })
})
