import React from 'react';
import PropTypes from 'prop-types';
import style from './Ticket.module.scss';
import { countStops, formatPrice, minutesToHours, formatStops, formatDate } from '../../utils/ticketUtils';

const Ticket = ({ ticket }) => (
  <a href="#" className={style.ticket}>
    <div className={style.header}>
      <div className={style.price}>{formatPrice(ticket.price)}</div>
      <div className={style.carrier}>
        <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt={ticket.carrier} />
      </div>
    </div>
    <div className={style.body}>
      {ticket.segments.map((segment) => (
        <div key={segment.origin} className={style.row}>
          <div className={style.col}>
            <div className={style.headerRow}>
              {segment.origin} – {segment.destination}
            </div>
            <div className={style.textRow}>{formatDate(segment.date, segment.duration)}</div>
          </div>
          <div className={style.col}>
            <div className={style.headerRow}>В пути</div>
            <div className={style.textRow}>{minutesToHours(segment.duration)}</div>
          </div>
          <div className={style.col}>
            <div className={style.headerRow}>{countStops(segment.stops)}</div>
            <div className={style.textRow}>{formatStops(segment.stops)}</div>
          </div>
        </div>
      ))}
    </div>
  </a>
);

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string,
        destination: PropTypes.string,
        duration: PropTypes.number,
        origin: PropTypes.string,
        stops: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }).isRequired,
};

export default Ticket;
