import {connect} from 'react-redux';
import {setActiveYear} from 'actions/rooms-editor';
import YearSelector from 'components/rooms-editor/year-selector';
import Immutable from 'seamless-immutable';

const mapStateToProps = state => {
  return Immutable({
    year: state.roomsEditor.activeYear,
  });
};

const mapDispatchToProps = dispatch => {
  return Immutable({
    onYearChanged: year => {
      dispatch(setActiveYear(year));
    },
  });
};

const ActiveYearSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(YearSelector);

export default ActiveYearSelector
