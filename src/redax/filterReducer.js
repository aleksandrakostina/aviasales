import { SET_FILTER } from './actions';

const ALL = 'ALL';
const ZERO = 'ZERO';
const ONE = 'ONE';
const TWO = 'TWO';
const THREE = 'THREE';

export const visibilityFilters = {
  ALL,
  ZERO,
  ONE,
  TWO,
  THREE,
};

const initialState = [ALL, ZERO, ONE, TWO, THREE];

const setVisibilityFilter = (state, filter) => {
  if (filter === ALL) {
    return state.includes(filter) ? [] : [...state, ...initialState.filter((item) => !state.includes(item))];
  }
  if (state.includes(filter)) {
    return state.includes(ALL)
      ? state.filter((item) => item !== ALL && item !== filter)
      : state.filter((item) => item !== filter);
  }
  if (!state.includes(filter)) {
    return state.length === initialState.length - 2 ? initialState : [...state, filter];
  }
  return state;
};

const filterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FILTER:
      return setVisibilityFilter(state, action.filter);
    default:
      return state;
  }
};

export default filterReducer;
