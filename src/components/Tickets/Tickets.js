import React from 'react';
import carrier from './carrier.png';
import style from './Tickets.module.scss';

const Tickets = () => (
  <div className={style.tickets}>
    <ul className={style.tickets__list}>
      <li className={style.tickets__item}>
        <a href="#" className={style.ticket}>
          <div className={style.ticket__header}>
            <div className={style.ticket__price}>13 400 Р</div>
            <div className={style.ticket__carrier}>
              <img src={carrier} alt="carrier" />
            </div>
          </div>
          <div className={style.ticket__body}>
            <div className={style['segment-route']}>
              <div className={style['segment-route__body']}>
                <div className={style['segment-route__row']}>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>MOW – HKT</div>
                    <div className={style['segment-route__text']}>10:45 – 08:00</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>В пути</div>
                    <div className={style['segment-route__text']}>21ч 15м</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>2 пересадки</div>
                    <div className={style['segment-route__text']}>HKG, JNB</div>
                  </div>
                </div>
                <div className={style['segment-route__row']}>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>MOW – HKT</div>
                    <div className={style['segment-route__text']}>11:20 – 00:50</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>В пути</div>
                    <div className={style['segment-route__text']}>13ч 30м</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>1 пересадка</div>
                    <div className={style['segment-route__text']}>HKG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li className={style.tickets__item}>
        <a href="#" className={style.ticket}>
          <div className={style.ticket__header}>
            <div className={style.ticket__price}>13 400 Р</div>
            <div className={style.ticket__carrier}>
              <img src={carrier} alt="carrier" />
            </div>
          </div>
          <div className={style.ticket__body}>
            <div className={style['segment-route']}>
              <div className={style['segment-route__body']}>
                <div className={style['segment-route__row']}>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>MOW – HKT</div>
                    <div className={style['segment-route__text']}>10:45 – 08:00</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>В пути</div>
                    <div className={style['segment-route__text']}>21ч 15м</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>2 пересадки</div>
                    <div className={style['segment-route__text']}>HKG, JNB</div>
                  </div>
                </div>
                <div className={style['segment-route__row']}>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>MOW – HKT</div>
                    <div className={style['segment-route__text']}>11:20 – 00:50</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>В пути</div>
                    <div className={style['segment-route__text']}>13ч 30м</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>1 пересадка</div>
                    <div className={style['segment-route__text']}>HKG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li className={style.tickets__item}>
        <a href="#" className={style.ticket}>
          <div className={style.ticket__header}>
            <div className={style.ticket__price}>13 400 Р</div>
            <div className={style.ticket__carrier}>
              <img src={carrier} alt="carrier" />
            </div>
          </div>
          <div className={style.ticket__body}>
            <div className={style['segment-route']}>
              <div className={style['segment-route__body']}>
                <div className={style['segment-route__row']}>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>MOW – HKT</div>
                    <div className={style['segment-route__text']}>10:45 – 08:00</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>В пути</div>
                    <div className={style['segment-route__text']}>21ч 15м</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>2 пересадки</div>
                    <div className={style['segment-route__text']}>HKG, JNB</div>
                  </div>
                </div>
                <div className={style['segment-route__row']}>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>MOW – HKT</div>
                    <div className={style['segment-route__text']}>11:20 – 00:50</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>В пути</div>
                    <div className={style['segment-route__text']}>13ч 30м</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>1 пересадка</div>
                    <div className={style['segment-route__text']}>HKG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li className={style.tickets__item}>
        <a href="#" className={style.ticket}>
          <div className={style.ticket__header}>
            <div className={style.ticket__price}>13 400 Р</div>
            <div className={style.ticket__carrier}>
              <img src={carrier} alt="carrier" />
            </div>
          </div>
          <div className={style.ticket__body}>
            <div className={style['segment-route']}>
              <div className={style['segment-route__body']}>
                <div className={style['segment-route__row']}>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>MOW – HKT</div>
                    <div className={style['segment-route__text']}>10:45 – 08:00</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>В пути</div>
                    <div className={style['segment-route__text']}>21ч 15м</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>2 пересадки</div>
                    <div className={style['segment-route__text']}>HKG, JNB</div>
                  </div>
                </div>
                <div className={style['segment-route__row']}>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>MOW – HKT</div>
                    <div className={style['segment-route__text']}>11:20 – 00:50</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>В пути</div>
                    <div className={style['segment-route__text']}>13ч 30м</div>
                  </div>
                  <div className={style['segment-route__col']}>
                    <div className={style['segment-route__header']}>1 пересадка</div>
                    <div className={style['segment-route__text']}>HKG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
);

export default Tickets;
