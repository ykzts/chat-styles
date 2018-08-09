import { CHAT_STYLES_FETCH_SUCCESS, CHAT_STYLES_SAVE_SUCCESS } from '../actions/chatStyles';
import generateStyleSheet from '../utils/generateStyleSheet';

const initialState = {
  rawText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHAT_STYLES_FETCH_SUCCESS:
      return {
        ...state,
        rawText: generateStyleSheet(action.chatStyles),
      };
    case CHAT_STYLES_SAVE_SUCCESS:
      return {
        ...state,
        rawText: generateStyleSheet(action.chatStyles),
      };
    default:
      return state;
  }
};
