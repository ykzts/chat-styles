import {
  CHAT_STYLES_FETCH_FAIL,
  CHAT_STYLES_FETCH_REQUEST,
  CHAT_STYLES_FETCH_SUCCESS,
  CHAT_STYLES_SAVE_SUCCESS,
} from '../actions/chatStyles';

const hex2rgb = hex => ({
  rgb: {
    a: 1,
    b: parseInt(hex.slice(5, 7), 16),
    g: parseInt(hex.slice(3, 5), 16),
    r: parseInt(hex.slice(1, 3), 16),
  },
});

const initialState = {
  authorNameSize: 18,
  authorNameColor: hex2rgb('#ffffff'),
  avatarSize: 20,
  isLoading: true,
  memberAuthorNameColor: hex2rgb('#107516'),
  messageColor: hex2rgb('#ffffff'),
  messageSize: 18,
  moderatorAuthorNameColor: hex2rgb('#5e84f1'),
  outlineColor: hex2rgb('#000000'),
  outlineSize: 2,
  ownerAuthorNameColor: hex2rgb('#ffd600'),
  showAuthorName: true,
  showAvatar: true,
  showBadge: true,
  showMemberBadge: true,
  showModeratorBadge: true,
  showNewMemberBackground: true,
  showOutline: true,
  showSuperChatBackground: true,
  showTimestamp: false,
  timestampColor: hex2rgb('#999999'),
  timestampSize: 16,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHAT_STYLES_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case CHAT_STYLES_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CHAT_STYLES_FETCH_SUCCESS:
      return {
        ...state,
        ...action.chatStyles,
        isLoading: false,
      };
    case CHAT_STYLES_SAVE_SUCCESS:
      return {
        ...state,
        ...action.chatStyles,
      };
    default:
      return state;
  }
};
