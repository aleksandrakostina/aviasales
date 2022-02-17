import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import sortReducer from './sortReducer';

const reducers = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
});

export default reducers;
