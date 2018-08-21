import { connect } from 'react-redux';
import { changePreviewInvert } from '../actions/preview';
import Preview from '../components/Preview';

const mapStateToProps = state => ({
  invert: state.preview.get('invert'),
  styleSheet: state.styleSheet.get('rawText'),
});

const mapDispatchToProps = dispatch => ({
  changePreviewInvert: invert => dispatch(changePreviewInvert(invert)),
});

export default Preview
  |> connect(mapStateToProps, mapDispatchToProps);
