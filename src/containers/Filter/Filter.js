import { connect } from 'react-redux';
import CheckBox from '../../components/CheckBox';
import { setFilter } from '../../redax/actions';

const mapStateToProps = (state, ownProps) => ({
  active: state.filter.includes(ownProps.filter),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: () => dispatch(setFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
