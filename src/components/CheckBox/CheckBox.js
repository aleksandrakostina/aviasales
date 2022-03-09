import React from 'react';
import PropTypes from 'prop-types';
import style from './CheckBox.module.scss';

const CheckBox = ({ handleChange, active, children }) => (
  <label className={style.label}>
    <input className={style.input} type="checkbox" checked={active} onChange={handleChange} />
    <span className={style.box} />
    <span className={style.text}>{children}</span>
  </label>
);

CheckBox.propTypes = {
  active: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CheckBox;
