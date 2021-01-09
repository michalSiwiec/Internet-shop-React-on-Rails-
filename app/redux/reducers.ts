import { combineReducers } from 'redux';

import productsReducer from './products/duck/reducer'
import basketReducer from './basket/duck/reducer'

const rootReducer = combineReducers({productsReducer, basketReducer});

export default rootReducer;