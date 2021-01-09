import { combineReducers } from 'redux';

import moviesReducers from './movies/duck/reducers';
import actorsReducers from './actors/duck/reducers';
import productsReducer from './products/duck/reducer'
import basketReducer from './basket/duck/reducer'

const rootReducer = combineReducers({moviesReducers, actorsReducers, productsReducer, basketReducer});

export default rootReducer;