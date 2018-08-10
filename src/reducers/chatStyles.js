import Immutable, { Map } from 'immutable';
import {
  CHAT_STYLES_FETCH_FAIL,
  CHAT_STYLES_FETCH_REQUEST,
  CHAT_STYLES_FETCH_SUCCESS,
  CHAT_STYLES_SAVE_SUCCESS,
} from '../actions/chatStyles';

const initialState = new Map({
  isLoading: false,
  values: new Map(),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CHAT_STYLES_FETCH_FAIL:
      return state.set('isLoading', false);
    case CHAT_STYLES_FETCH_REQUEST:
      return state.set('isLoading', true);
    case CHAT_STYLES_FETCH_SUCCESS:
      return state.withMutations((map) => {
        map.set('isLoading', false);
        map.update('values', (values) => {
          const chatStyles = Immutable.fromJS(action.chatStyles);
          return values.merge(chatStyles);
        });
      });
    case CHAT_STYLES_SAVE_SUCCESS:
      return state.update('values', (values) => {
        const chatStyles = Immutable.fromJS(action.chatStyles);
        return values.merge(chatStyles);
      });
    default:
      return state;
  }
};
