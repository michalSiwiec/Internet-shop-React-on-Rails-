import React from 'react'
import ReactDOM from 'react-dom'

import {Router, BrowserRouter, Route, ConnectedRouter} from 'react-router-dom'
import History from '../history/history'

import {Provider} from 'react-redux'
import store from '../../redux/store'

import App from '../components/App'

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <Router history={History} >
//         <App />
//       </Router>
//     </Provider>,
//     document.body.appendChild(document.createElement('div')),
//   )
// })

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


