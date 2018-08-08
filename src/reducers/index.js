import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import chatStyles from './chatStyles';
import preview from './preview';
import styleSheet from './styleSheet';

export default combineReducers({
  chatStyles,
  preview,
  styleSheet,
  form: formReducer,
});
