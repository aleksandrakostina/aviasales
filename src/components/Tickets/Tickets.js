import React from 'react';
import PropTypes from 'prop-types';
import style from './Tickets.module.scss';
import Ticket from '../Ticket';
import { ReactComponent as Loading } from './spinner.svg';

const Tickets = ({ tickets, isLoading, isError, onLoadMoreClick, isLastPage, loaded }) => {
  const ticketsList = tickets.map((ticket) => (
    <li key={ticket.id} className={style.tickets__item}>
      <Ticket ticket={ticket} />
    </li>
  ));

  const hasContent = !isLoading && !isError;
  const error = isError && !isLoading;
  const isEmpty = !tickets.length && hasContent;

  return (
    <>
      {error && <p className={style.tickets__error}>Не удалось загрузить билеты</p>}
      {!loaded && <p className={style.tickets__message}>Ищем авиабилеты...</p>}
      {isLoading && <Loading />}
      {isEmpty ? (
        <p className={style.tickets__message}>Рейсов, подходящих под заданные фильтры, не найдено</p>
      ) : (
        <div className={style.tickets}>
          <ul className={style.tickets__list}>{ticketsList}</ul>
          {!isLastPage && (
            <button className={style['tickets__show-more-btn']} type="button" onClick={onLoadMoreClick}>
              Показать еще 5 билетов!
            </button>
          )}
        </div>
      )}
    </>
  );
};

Tickets.defaultProps = {
  onLoadMoreClick: () => {},
};

Tickets.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  onLoadMoreClick: PropTypes.func,
  isLastPage: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
};

export default Tickets;
