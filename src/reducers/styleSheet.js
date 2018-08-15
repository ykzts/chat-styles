import { Map } from 'immutable';
import { CHAT_STYLES_FETCH_SUCCESS, CHAT_STYLES_SAVE_SUCCESS } from '../actions/chatStyles';
import { generateStyleSheet } from '../utils/styleSheets';

const initialState = new Map({
  rawText: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CHAT_STYLES_FETCH_SUCCESS:
    case CHAT_STYLES_SAVE_SUCCESS:
      return state.set('rawText', generateStyleSheet(action.chatStyles));
    default:
      return state;
  }
};
