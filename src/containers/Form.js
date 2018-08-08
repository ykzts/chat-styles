import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { formValueSelector, reduxForm } from 'redux-form';
import Form from '../components/Form';

const styles = ({ spacing }) => ({
  box: {
    marginBottom: spacing.unit * 8,
  },
  textField: {
    maxWidth: '100%',
  },
});

const selector = formValueSelector('chat');

const mapStateToProps = state => ({
  initialValues: state.chat,
  ...selector(
    state,
    'showAuthorName',
    'showAvatar',
    'showBadge',
    'showOutline',
    'showTimestamp',
  ),
});

export default connect(mapStateToProps)(reduxForm({ form: 'chat' })(withStyles(styles)(Form)));
