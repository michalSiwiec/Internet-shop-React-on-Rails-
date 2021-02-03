import { combineReducers } from 'redux';

import productsReducer from './products/duck/reducer'
import basketReducer from './basket/duck/reducer'
import adminsReducer from './admin/reducer'
import userReducer from './user/duck/reducer'

const rootReducer = combineReducers({productsReducer, basketReducer, adminsReducer, userReducer});

export default rootReducer;