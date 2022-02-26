import React from 'react';
import style from './Filters.module.scss';
import { visibilityFilters } from '../../redax/filterReducer';
import Filter from '../../containers/Filter';

const Filters = () => (
  <div className={style.filter}>
    <h3 className={style.filter__title}>Количество пересадок</h3>
    <ul className={style.filter__list}>
      <li className={style.filter__item}>
        <Filter filter={visibilityFilters.ALL}>Все</Filter>
      </li>
      <li className={style.filter__item}>
        <Filter filter={visibilityFilters.ZERO}>Без пересадок</Filter>
      </li>
      <li className={style.filter__item}>
        <Filter filter={visibilityFilters.ONE}>1 пересадка</Filter>
      </li>
      <li className={style.filter__item}>
        <Filter filter={visibilityFilters.TWO}>2 пересадки</Filter>
      </li>
      <li className={style.filter__item}>
        <Filter filter={visibilityFilters.THREE}>3 пересадки</Filter>
      </li>
    </ul>
  </div>
);

export default Filters;
