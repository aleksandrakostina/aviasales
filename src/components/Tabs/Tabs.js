import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './Tabs.module.scss';
import { setSort } from '../../redax/actions';
import { tabs } from '../../redax/sortReducer';

const Tabs = ({ changeSort, sort }) => {
  const tabsList = tabs.map((tab) => (
    <button
      key={tab.id}
      className={classnames(style.btn, { [style.btnActive]: tab.id === sort })}
      type="button"
      onClick={() => changeSort(tab.id)}
    >
      {tab.name}
    </button>
  ));

  return <div className={style.tabs}>{tabsList}</div>;
};

Tabs.propTypes = {
  changeSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sort: state.sort,
});

const mapDispatchToProps = (dispatch) => ({
  changeSort: (id) => dispatch(setSort(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
