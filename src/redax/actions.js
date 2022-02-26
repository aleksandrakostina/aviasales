import AviasalesService from '../services/aviasalesService';

export const SET_SORT = 'SET_SORT';
export const SET_FILTER = 'SET_FILTER';

export const GET_TICKETS_REQUEST = 'GET_TICKETS_REQUEST';
export const GET_TICKETS_SUCCESS = 'GET_TICKETS_SUCCESS';
export const GET_TICKETS_FAILURE = 'GET_TICKETS_FAILURE';

export const SET_PAGE = 'SET_PAGE';

export const LOADED = 'LOADED';

export const setSort = (sort) => ({ type: SET_SORT, sort });
export const setFilter = (filter) => ({ type: SET_FILTER, filter });

export const getTicketsRequest = () => ({ type: GET_TICKETS_REQUEST });
export const getTicketsSuccess = (tickets) => ({ type: GET_TICKETS_SUCCESS, tickets });
export const getTicketsFailure = () => ({ type: GET_TICKETS_FAILURE });

export const setPage = (page) => ({ type: SET_PAGE, page });

export const loaded = () => ({ type: LOADED });

const aviasales = new AviasalesService();

const getTicketsLoop = (searchId) => (dispatch) => {
  aviasales
    .getTickets(searchId)
    .then((data) => {
      if (data.ok) {
        dispatch(getTicketsSuccess(data.tickets));
        if (!data.stop) {
          dispatch(getTicketsLoop(searchId));
        } else {
          dispatch(loaded());
        }
      } else {
        dispatch(getTicketsLoop(searchId));
      }
    })
    .catch(() => {
      dispatch(getTicketsFailure());
      dispatch(loaded());
    });
};

export const getTickets = () => (dispatch) => {
  dispatch(getTicketsRequest());
  aviasales
    .getSearchId()
    .then((data) => {
      dispatch(getTicketsLoop(data.searchId));
    })
    .catch(() => dispatch(getTicketsFailure()));
};
