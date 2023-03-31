import React from 'react'
import { useDispatch } from 'react-redux'
import { filterChange } from '@/reducers/filterReducer'

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const value = event.target.value
    dispatch(filterChange(value))
  }

  return (
    <div className="grid">
      <label className="filter-option">
        <input type="radio" name="filter" value="ALL" onChange={handleChange} />
        <span>All</span>
      </label>
      <label className="filter-option">
        <input
          type="radio"
          name="filter"
          value="IMPORTANT"
          onChange={handleChange}
        />
        <span>Important</span>
      </label>
      <label className="filter-option">
        <input
          type="radio"
          name="filter"
          value="NONIMPORTANT"
          onChange={handleChange}
        />
        <span>Non important</span>
      </label>
    </div>
  )
}

export default VisibilityFilter
