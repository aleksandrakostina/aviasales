import React from 'react';
import classnames from 'classnames';
import style from './Tabs.module.scss';

const Tabs = () => (
  <div className={style.tabs}>
    <button className={classnames(style.tabs__btn, style['tabs__btn--active'])} type="button">
      Самый дешевый
    </button>
    <button className={style.tabs__btn} type="button">
      Самый быстрый
    </button>
  </div>
);

export default Tabs;
