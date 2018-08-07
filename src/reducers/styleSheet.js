import { STYLE_SHEET_CREATE_SUCCESS } from '../actions/styleSheet';

const initialState = {
  rawText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STYLE_SHEET_CREATE_SUCCESS:
      return {
        ...state,
        rawText: action.rawText,
      };
    default:
      return state;
  }
};
