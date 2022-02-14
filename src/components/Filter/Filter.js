import React from 'react';
import style from './Filter.module.scss';

const Filter = () => (
  <div className={style.filter}>
    <h3 className={style.filter__title}>Количество пересадок</h3>
    <ul className={style.filter__list}>
      <li className={style.filter__item}>
        <label className={style.check}>
          <input className={style.check__input} type="checkbox" />
          <span className={style.check__box} />
          <span className={style.check__text}>Все</span>
        </label>
      </li>
      <li className={style.filter__item}>
        <label className={style.check}>
          <input className={style.check__input} type="checkbox" />
          <span className={style.check__box} />
          <span className={style.check__text}>Без пересадок</span>
        </label>
      </li>
      <li className={style.filter__item}>
        <label className={style.check}>
          <input className={style.check__input} type="checkbox" />
          <span className={style.check__box} />
          <span className={style.check__text}>1 пересадка</span>
        </label>
      </li>
      <li className={style.filter__item}>
        <label className={style.check}>
          <input className={style.check__input} type="checkbox" />
          <span className={style.check__box} />
          <span className={style.check__text}>2 пересадки</span>
        </label>
      </li>
      <li className={style.filter__item}>
        <label className={style.check}>
          <input className={style.check__input} type="checkbox" />
          <span className={style.check__box} />
          <span className={style.check__text}>3 пересадки</span>
        </label>
      </li>
    </ul>
  </div>
);

export default Filter;
