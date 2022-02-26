import React from 'react';
import PropTypes from 'prop-types';
import style from './Ticket.module.scss';
import { countStops, formatPrice, minutesToHours, formatStops, formatDate } from '../../utils/ticketUtils';

const Ticket = ({ ticket }) => (
  <a href="#" className={style.ticket}>
    <div className={style.ticket__header}>
      <div className={style.ticket__price}>{formatPrice(ticket.price)}</div>
      <div className={style.ticket__carrier}>
        <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt={ticket.carrier} />
      </div>
    </div>
    <div className={style.ticket__body}>
      <div className={style['segment-route']}>
        <div className={style['segment-route__body']}>
          {ticket.segments.map((segment) => (
            <div key={segment.origin} className={style['segment-route__row']}>
              <div className={style['segment-route__col']}>
                <div className={style['segment-route__header']}>
                  {segment.origin} – {segment.destination}
                </div>
                <div className={style['segment-route__text']}>{formatDate(segment.date, segment.duration)}</div>
              </div>
              <div className={style['segment-route__col']}>
                <div className={style['segment-route__header']}>В пути</div>
                <div className={style['segment-route__text']}>{minutesToHours(segment.duration)}</div>
              </div>
              <div className={style['segment-route__col']}>
                <div className={style['segment-route__header']}>{countStops(segment.stops)}</div>
                <div className={style['segment-route__text']}>{formatStops(segment.stops)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
