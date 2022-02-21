import AviasalesService from "../services/aviasalesService";

export const SET_SORT = 'SET_SORT';
export const SET_FILTER = 'SET_FILTER';

export const GET_TICKETS_REQUEST = 'GET_TICKETS_REQUEST';
export const GET_TICKETS_SUCCESS = 'GET_TICKETS_SUCCESS';
export const GET_TICKETS_FAILURE = 'GET_TICKETS_FAILURE';

export const setSort = (sort) => ({ type: SET_SORT, sort });
export const setFilter = (filter) => ({ type: SET_FILTER, filter });

export const getTicketsRequest = () => ({ type: GET_TICKETS_REQUEST });
export const getTicketsSuccess = (tickets) => ({ type: GET_TICKETS_SUCCESS, tickets });
export const getTicketsFailure = (error) => ({ type: GET_TICKETS_FAILURE, error });

export const getTickets = () => (dispatch) => {
  dispatch(getTicketsRequest());
  const aviasales = new AviasalesService;
  aviasales.getSearchId()
  .then(data => {
    if(data.searchId) {
      aviasales.getTickets(data.searchId).then(tickets => {
        dispatch(getTicketsSuccess(tickets.tickets))
      }).catch(() => {
        dispatch(getTicketsFailure());
      })
    }
  }).catch(() => dispatch(getTicketsFailure()));
}
