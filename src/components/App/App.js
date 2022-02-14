import React from 'react';
import logo from './Logo.png';
import style from './App.module.scss';
import Tickets from '../Tickets';
import Filter from '../Filter';
import Tabs from '../Tabs';

const App = () => (
  <div className={style.app}>
    <div className={style.app__wrapper}>
      <header className={style.app__header}>
        <img className={style.app__logo} src={logo} alt="logo" />
      </header>
      <main className={style.app__main}>
        <div className={style.app__container}>
          <aside className={style.app__sidebar}>
            <Filter />
          </aside>
          <div className={style.app__content}>
            <Tabs />
            <Tickets />
            <div className={style['show-more-tickets']}>
              <button className={style['show-more-tickets__btn']} type="button">
                Показать еще 5 билетов!
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default App;
