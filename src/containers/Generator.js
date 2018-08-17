import { connect } from 'react-redux';
import { fetchChatStyles } from '../actions/chatStyles';
import Generator from '../components/Generator';

const mapStateToProps = state => ({
  hasChatStyles: !state.chatStyles.get('values').isEmpty(),
  styleSheet: state.styleSheet.get('rawText'),
});

const mapDispatchToProps = dispatch => ({
  fetchChatStyles: () => dispatch(fetchChatStyles()),
});

export default Generator
  |> connect(mapStateToProps, mapDispatchToProps);
