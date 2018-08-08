import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { saveChatStyles } from '../actions/chatStyles';
import Form from '../components/Form';
import chatStylesSelector from '../selectors/chatStylesSelector';

const styles = ({ spacing }) => ({
  box: {
    marginBottom: spacing.unit * 8,
  },
  textField: {
    maxWidth: '100%',
  },
});

const mapStateToProps = state => ({
  initialValues: state.chatStyles,
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

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'chatStylesForm' })(withStyles(styles)(Form)));
