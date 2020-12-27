import {createStore} from 'redux'
import RootReducer from '../redux/reducers'

const store = createStore(RootReducer)

export default store