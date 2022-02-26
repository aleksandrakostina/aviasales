import { visibilityFilters } from '../redax/filterReducer';

const filteredTicketsArr = (tickets, stops) =>
  tickets.filter((ticket) => ticket.segments[0].stops.length === stops || ticket.segments[1].stops.length === stops);

const getFilteredTickets = (result, tickets, stops) =>
  [...result, ...filteredTicketsArr(tickets, stops)].filter((el, idx, arr) => arr.indexOf(el) === idx);

const filterTickets = (tickets, filters) => {
  let filteredTickets = [];

  if (filters.includes(visibilityFilters.ALL)) {
    return tickets;
  }

  filters.forEach((item) => {
    if (item === visibilityFilters.ZERO) {
      filteredTickets = getFilteredTickets(filteredTickets, tickets, 0);
    }
    if (item === visibilityFilters.ONE) {
      filteredTickets = getFilteredTickets(filteredTickets, tickets, 1);
    }
    if (item === visibilityFilters.TWO) {
      filteredTickets = getFilteredTickets(filteredTickets, tickets, 2);
    }
    if (item === visibilityFilters.THREE) {
      filteredTickets = getFilteredTickets(filteredTickets, tickets, 3);
    }
  });

  return filteredTickets;
};

export default filterTickets;
