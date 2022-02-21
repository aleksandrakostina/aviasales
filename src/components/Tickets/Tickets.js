import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTickets } from '../../redax/actions';
import style from './Tickets.module.scss';
import Ticket from '../Ticket';
import {ReactComponent as Loading} from './spinner.svg';

const Tickets = ({ getTicketsList, tickets, isLoading, isError }) => {
  
  useEffect(() => {
    getTicketsList();
  }, [getTicketsList]);

  const ticketsList = tickets.map(ticket => (
    <li key={ticket.id} className={style.tickets__item}>
      <Ticket ticket={ticket} />
    </li>)
  )

  const hasContent = !isLoading && !isError;
  const error = isError && !isLoading;
    
  return (
    <>
      {error && <p className={style.tickets__error}>Не удалось загрузить билеты</p>}
      {isLoading && <Loading />}
      {hasContent &&
      <>
        <ul className={style.tickets}>
          {ticketsList}
        </ul>
        <button className={style['tickets__show-more-btn']} type="button">
          Показать еще 5 билетов!
        </button>
      </>
      }
    </>
  );
}

Tickets.propTypes  = {
  getTicketsList: PropTypes.func.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
  isLoading: state.tickets.isLoading,
  isError: state.tickets.isError,
})

const mapDispatchToProps = (dispatch) => ({
  getTicketsList: () => dispatch(getTickets())
});

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
