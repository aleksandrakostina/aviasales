import { SET_FILTER } from './actions';

const ALL = 'ALL';
const ZERO = 'ZERO';
const ONE = 'ONE';
const TWO = 'TWO';
const THREE = 'THREE';

const initialState = [
  { id: ALL, checked: true, name: 'Все' },
  { id: ZERO, checked: true, name: 'Без пересадок' },
  { id: ONE, checked: true, name: '1 пересадка' },
  { id: TWO, checked: true, name: '2 пересадки' },
  { id: THREE, checked: true, name: '3 пересадки' },
];

const setVisibilityFilter = (state, filter) => {
  const findedFilter = state.find((item) => item.id === filter).checked;

  if (filter === ALL) {
    return findedFilter
      ? state.map((item) => (item.checked ? { ...item, checked: false } : item))
      : state.map((item) => (!item.checked ? { ...item, checked: true } : item));
  }
  if (findedFilter) {
    return state.find((item) => item.id === ALL).checked
      ? state.map((item) => (item.id === ALL || item.id === filter ? { ...item, checked: !item.checked } : item))
      : state.map((item) => (item.id === filter ? { ...item, checked: !item.checked } : item));
  }
  if (!findedFilter) {
    return state.find((item) => !item.checked && item.id !== filter && item.id !== ALL)
      ? state.map((item) => (item.id === filter ? { ...item, checked: true } : item))
      : state.map((item) => (!item.checked ? { ...item, checked: true } : item));
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
