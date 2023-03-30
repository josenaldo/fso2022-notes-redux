import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import noteReducer from '@/reducers/noteReducer'
import App from './App'

const store = createStore(noteReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
