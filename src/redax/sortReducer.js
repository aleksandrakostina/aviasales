import { SET_SORT } from './actions';

export const CHEAP = 'CHEAP';
export const FAST = 'FAST';
export const OPTIMAL = 'OPTIMAL';

export const tabs = [
  { id: CHEAP, name: 'Самый дешевый' },
  { id: FAST, name: 'Самый быстрый' },
  { id: OPTIMAL, name: 'Оптимальный' },
];

const initialState = CHEAP;

const sortReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SORT:
      return action.sort;
    default:
      return state;
  }
};

export default sortReducer;
