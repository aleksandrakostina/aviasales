import { SET_SORT } from './actions';
import { CHEAP } from './tabs';

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
