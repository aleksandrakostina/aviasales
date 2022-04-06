import { connect } from 'react-redux';
import CheckBox from '../../components/CheckBox';
import { setFilter } from '../../redax/actions';
import * as selectors from '../../redax/selectors';

const mapStateToProps = (state, props) => ({
  active: selectors.getActiveFilter(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  handleChange: () => dispatch(setFilter(props.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
