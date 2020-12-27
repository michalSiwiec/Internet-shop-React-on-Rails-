import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from '../../redux/store'

import App from '../components/App'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
