import { GET_TICKETS_FAILURE, GET_TICKETS_REQUEST, GET_TICKETS_SUCCESS, LOADED, SET_PAGE } from './actions';

const initialState = {
  tickets: [],
  isError: false,
  isLoading: false,
  page: 1,
  loaded: false,
};

const ticketsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_TICKETS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: [
          ...state.tickets,
          ...action.payload.map((ticket, id) => ({ ...ticket, id: id + state.tickets.length })),
        ],
        isLoading: false,
      };
    case GET_TICKETS_FAILURE:
      return { ...state, isError: true, isLoading: false, loaded: true };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case LOADED:
      return { ...state, loaded: true };
    default:
      return state;
  }
};

export default ticketsReducer;
