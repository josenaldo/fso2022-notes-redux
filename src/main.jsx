import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import noteReducer from '@/reducers/noteReducer'
import filterReducer from '@/reducers/filterReducer'

import App from './App'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
})

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
