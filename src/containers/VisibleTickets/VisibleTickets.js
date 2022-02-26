import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTickets, setPage } from '../../redax/actions';
import Tickets from '../../components/Tickets';
import filterTickets from '../../utils/filterTickets';
import sortTickets from '../../utils/sortTickets';

const TicketsContainer = ({ getTicketsList, page, setPageTickets, ...props }) => {
  useEffect(() => {
    getTicketsList();
  }, [getTicketsList]);

  const handleLoadMoreClick = () => {
    setPageTickets(page + 1);
  };

  return <Tickets onLoadMoreClick={handleLoadMoreClick} {...props} />;
};

TicketsContainer.propTypes = {
  getTicketsList: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPageTickets: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const countTicketsOnPage = 5;

  return {
    isLoading: state.tickets.isLoading,
    isError: state.tickets.isError,
    page: state.tickets.page,
    loaded: state.tickets.loaded,
    isLastPage: state.tickets.page === Math.trunc(state.tickets.tickets.length / countTicketsOnPage),
    tickets: sortTickets(filterTickets(state.tickets.tickets, state.filter), state.sort).slice(
      0,
      countTicketsOnPage * state.tickets.page
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTicketsList: () => dispatch(getTickets()),
  setPageTickets: (page) => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsContainer);
