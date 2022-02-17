import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logo from './Logo.png';
import style from './App.module.scss';
import Tickets from '../Tickets';
import Filters from '../Filters';
import Tabs from '../Tabs';
import reducers from '../../redax/reducers';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <div className={style.app}>
      <div className={style.app__wrapper}>
        <header className={style.app__header}>
          <img className={style.app__logo} src={logo} alt="logo" />
        </header>
        <main className={style.app__main}>
          <div className={style.app__container}>
            <aside className={style.app__sidebar}>
              <Filters />
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
  </Provider>
);

export default App;
