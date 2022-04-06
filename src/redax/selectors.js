import { createSelector } from 'reselect';
import filterTickets from '../utils/filterTickets';
import sortTickets from '../utils/sortTickets';

const countTicketsOnPage = 5;

export const getIsLoading = (state) => state.tickets.isLoading;
export const getIsError = (state) => state.tickets.isError;
export const getPage = (state) => state.tickets.page;
export const getLoaded = (state) => state.tickets.loaded;
export const getFilter = (state) => state.filter;
export const getTickets = (state) => state.tickets.tickets;
export const getSort = (state) => state.sort;

export const getActiveFilter = createSelector(
  getFilter,
  (state, props) => props.filter,
  (filter, activeFilter) => filter.includes(activeFilter)
);

export const getSortTickets = createSelector(getTickets, getFilter, getSort, getPage, (tickets, filter, sort, page) =>
  sortTickets(filterTickets(tickets, filter), sort).slice(0, countTicketsOnPage * page)
);

export const getIsLastPage = createSelector(
  getPage,
  getTickets,
  (page, tickets) => page === Math.trunc(tickets.length / countTicketsOnPage)
);
