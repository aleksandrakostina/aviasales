import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logo from './Logo.png';
import style from './App.module.scss';
import Filters from '../Filters';
import Tabs from '../Tabs';
import reducers from '../../redax/reducers';
import VisibleTickets from '../../containers/VisibleTickets';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const App = () => (
  <Provider store={store}>
    <div className={style.app}>
      <div className={style.wrapper}>
        <header className={style.header}>
          <img className={style.logo} src={logo} alt="logo" />
        </header>
        <main className={style.main}>
          <div className={style.container}>
            <aside className={style.sidebar}>
              <Filters />
            </aside>
            <div className={style.content}>
              <Tabs />
              <VisibleTickets />
            </div>
          </div>
        </main>
      </div>
    </div>
  </Provider>
);

export default App;
