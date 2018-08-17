import { connect } from 'react-redux';
import { changePreviewInvert, fetchPreviewInvert } from '../actions/preview';
import Preview from '../components/Preview';

const mapStateToProps = state => ({
  invert: state.preview.get('invert'),
  styleSheet: state.styleSheet.get('rawText'),
});

const mapDispatchToProps = dispatch => ({
  changePreviewInvert: invert => dispatch(changePreviewInvert(invert)),
  fetchPreviewInvert: () => dispatch(fetchPreviewInvert()),
});

export default Preview
  |> connect(mapStateToProps, mapDispatchToProps);
