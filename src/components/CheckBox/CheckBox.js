import React from 'react';
import PropTypes from 'prop-types';
import style from './CheckBox.module.scss';

const CheckBox = ({ handleChange, active, children }) => (
  <label className={style.check}>
    <input className={style.check__input} type="checkbox" checked={active} onChange={handleChange} />
    <span className={style.check__box} />
    <span className={style.check__text}>{children}</span>
  </label>
);

CheckBox.propTypes = {
  active: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CheckBox;
