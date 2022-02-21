import { GET_TICKETS_FAILURE, GET_TICKETS_REQUEST, GET_TICKETS_SUCCESS } from "./actions";

const initialState = {
  tickets: [],
  isError: false,
  isLoading: false
};

const ticketsReducer  = (state = initialState, action = {}) => {
  switch(action.type) {
    case GET_TICKETS_REQUEST:
      return {...state, isLoading: true, isError: false};
    case GET_TICKETS_SUCCESS:
      return {...state, tickets: action.tickets.map((ticket, id) => ({...ticket, id})), isLoading: false};
    case GET_TICKETS_FAILURE:
      return {...state, isError: true, isLoading: false};
    default:
      return state;
  }
}

export default ticketsReducer;