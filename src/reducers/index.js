import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import chat from './chat';
import preview from './preview';

export default combineReducers({
  chat,
  preview,
  form: formReducer,
});
