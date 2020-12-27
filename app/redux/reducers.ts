import { combineReducers } from 'redux';

import moviesReducers from './movies/duck/reducers';
import actorsReducers from './actors/duck/reducers';


const rootReducer = combineReducers({moviesReducers, actorsReducers});

export default rootReducer;