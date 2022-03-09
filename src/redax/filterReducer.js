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

const isIncludeFilter = (state, filter) => state.includes(filter);

const setVisibilityFilter = (state, filter) => {
  if (filter === ALL) {
    return isIncludeFilter(state, filter)
      ? []
      : [...state, ...initialState.filter((item) => !isIncludeFilter(state, item))];
  }
  if (isIncludeFilter(state, filter)) {
    return isIncludeFilter(state, ALL)
      ? state.filter((item) => item !== ALL && item !== filter)
      : state.filter((item) => item !== filter);
  }
  if (!isIncludeFilter(state, filter)) {
    return state.length === initialState.length - 2 ? initialState : [...state, filter];
  }
  return state;
};

const filterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FILTER:
      return setVisibilityFilter(state, action.payload);
    default:
      return state;
  }
};

export default filterReducer;
