import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import sortReducer from './sortReducer';
import ticketsReducer from './ticketsReducer';

const reducers = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  tickets: ticketsReducer,
});

export default reducers;
