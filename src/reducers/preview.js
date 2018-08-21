import { Map } from 'immutable';
import {
  PREVIEW_INVERT_CHANGE_SUCCESS,
  PREVIEW_INVERT_FETCH_SUCCESS,
} from '../actions/preview';

const initialState = new Map({
  invert: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case PREVIEW_INVERT_CHANGE_SUCCESS:
    case PREVIEW_INVERT_FETCH_SUCCESS:
      return state.set('invert', action.invert);
    default:
      return state;
  }
};
