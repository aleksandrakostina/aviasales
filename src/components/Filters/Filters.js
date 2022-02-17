import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from '../../redax/actions';
import style from './Filter.module.scss';

const Filters = ({ changeFilter, filter }) => {
  const filterList = filter.map((item) => (
    <li key={item.id} className={style.filter__item}>
      <label className={style.check}>
        <input
          className={style.check__input}
          type="checkbox"
          checked={item.checked}
          onChange={() => changeFilter(item.id)}
        />
        <span className={style.check__box} />
        <span className={style.check__text}>{item.name}</span>
      </label>
    </li>
  ));

  return (
    <div className={style.filter}>
      <h3 className={style.filter__title}>Количество пересадок</h3>
      <ul className={style.filter__list}>{filterList}</ul>
    </div>
  );
};

Filters.defaultProps = {
  changeFilter: () => {},
};

Filters.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (id) => dispatch(setFilter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
