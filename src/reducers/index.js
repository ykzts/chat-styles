import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import chat from './chat';
import preview from './preview';
import styleSheet from './styleSheet';

export default combineReducers({
  chat,
  preview,
  styleSheet,
  form: formReducer,
});
