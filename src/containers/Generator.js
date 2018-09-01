// @flow

import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchChatStyles } from '../actions/chatStyles';
import { fetchPreviewInvert } from '../actions/preview';
import Generator from '../components/Generator';

const mapStateToProps = state => ({
  isLoading: state.preview.get('invert') === null
    || state.chatStyles.get('values').isEmpty(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchChatStyles: (): void => dispatch(fetchChatStyles()),
  fetchPreviewInvert: (): void => dispatch(fetchPreviewInvert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Generator);
