import {createStore, applyMiddleware} from 'redux'
import RootReducer from '../redux/reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

// const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))
const store = createStore(RootReducer, composeWithDevTools())

export default store