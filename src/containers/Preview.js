// @flow

import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { changePreviewInvert } from '../actions/preview';
import Preview from '../components/Preview';

const mapStateToProps = state => ({
  invert: state.preview.get('invert'),
  styleSheet: state.styleSheet.get('rawText'),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePreviewInvert: (invert: boolean): void => dispatch(changePreviewInvert(invert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
