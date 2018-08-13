import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { saveChatStyles } from '../actions/chatStyles';
import Form from '../components/Form';
import chatStylesSelector from '../selectors/chatStylesSelector';

const styles = ({ spacing }) => ({
  box: {
    marginBottom: spacing.unit * 4,
  },
  textField: {
    maxWidth: '100%',
  },
});

const mapStateToProps = state => ({
  initialValues: state.chatStyles.get('values').toJS(),
  ...chatStylesSelector(
    state,
    'showAuthorName',
    'showAvatar',
    'showBadge',
    'showOutline',
    'showTimestamp',
  ),
});

const mapDispatchToProps = dispatch => ({
  saveChatStyles: () => dispatch(saveChatStyles()),
});

export default Form
  |> withStyles(styles)
  |> reduxForm({ form: 'chatStylesForm' })
  |> connect(mapStateToProps, mapDispatchToProps)
