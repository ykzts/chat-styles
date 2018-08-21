import { connect } from 'react-redux';
import { fetchChatStyles } from '../actions/chatStyles';
import { fetchPreviewInvert } from '../actions/preview';
import Generator from '../components/Generator';

const mapStateToProps = state => ({
  isLoading: !state.chatStyles.get('values').isEmpty()
    && state.preview.get('invert'),
});

const mapDispatchToProps = dispatch => ({
  fetchChatStyles: () => dispatch(fetchChatStyles()),
  fetchPreviewInvert: () => dispatch(fetchPreviewInvert()),
});

export default Generator |> connect(mapStateToProps, mapDispatchToProps);
