// @flow

import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { saveChatStyles } from '../actions/chatStyles';
import Form from '../components/Form';
import chatStylesSelector from '../selectors/chatStylesSelector';

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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  saveChatStyles: (): void => dispatch(saveChatStyles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'chatStylesForm' })(Form));
