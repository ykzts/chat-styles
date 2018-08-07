import {
  PREVIEW_INVERT_CHANGE_SUCCESS,
  PREVIEW_INVERT_FETCH_SUCCESS,
} from '../actions/preview';

const initialState = {
  invert: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PREVIEW_INVERT_CHANGE_SUCCESS:
      return {
        ...state,
        invert: action.invert,
      };
    case PREVIEW_INVERT_FETCH_SUCCESS:
      return {
        ...state,
        invert: action.invert,
      };
    default:
      return state;
  }
};
