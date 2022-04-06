import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTickets, setPage } from '../../redax/actions';
import Tickets from '../../components/Tickets';
import * as selectors from '../../redax/selectors';

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

const mapStateToProps = (state) => ({
  isLoading: selectors.getIsLoading(state),
  isError: selectors.getIsError(state),
  page: selectors.getPage(state),
  loaded: selectors.getLoaded(state),
  isLastPage: selectors.getIsLastPage(state),
  tickets: selectors.getSortTickets(state),
});

const mapDispatchToProps = (dispatch) => ({
  getTicketsList: () => dispatch(getTickets()),
  setPageTickets: (page) => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsContainer);
