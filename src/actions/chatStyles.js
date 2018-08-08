import localForage from 'localforage';
import chatStylesSelector from '../selectors/chatStylesSelector';

export const CHAT_STYLES_FETCH_FAIL = 'CHAT_STYLES_FETCH_FAIL';
export const CHAT_STYLES_FETCH_REQUEST = 'CHAT_STYLES_FETCH_REQUEST';
export const CHAT_STYLES_FETCH_SUCCESS = 'CHAT_STYLES_FETCH_SUCCESS';
export const CHAT_STYLES_SAVE_FAIL = 'CHAT_STYLE_SAVE_FAIL';
export const CHAT_STYLES_SAVE_REQUEST = 'CHAT_STYLE_SAVE_REQUEST';
export const CHAT_STYLES_SAVE_SUCCESS = 'CHAT_STYLE_SAVE_SUCCESS';

export const fetchChatStylesFail = error => ({
  error,
  type: CHAT_STYLES_FETCH_FAIL,
});

export const fetchChatStylesRequest = () => ({
  type: CHAT_STYLES_FETCH_REQUEST,
});

export const fetchChatStylesSuccess = chatStyles => ({
  chatStyles,
  type: CHAT_STYLES_FETCH_SUCCESS,
});

export const fetchChatStyles = () => (dispatch) => {
  dispatch(fetchChatStylesRequest());

  localForage.getItem('chatStyles')
    .then(chatStyles => dispatch(fetchChatStylesSuccess(chatStyles)))
    .catch(error => dispatch(fetchChatStylesFail(error)));
};

export const saveChatStylesFail = error => ({
  error,
  type: CHAT_STYLES_SAVE_FAIL,
});

export const saveChatStylesRequest = () => ({
  type: CHAT_STYLES_SAVE_REQUEST,
});

export const saveChatStylesSuccess = chatStyles => ({
  chatStyles,
  type: CHAT_STYLES_SAVE_SUCCESS,
});

export const saveChatStyles = () => (dispatch, getState) => {
  dispatch(saveChatStylesRequest());

  const chatStyles = chatStylesSelector(
    getState(),
    'authorNameColor',
    'authorNameSize',
    'avatarSize',
    'memberAuthorNameColor',
    'messageColor',
    'messageSize',
    'moderatorAuthorNameColor',
    'outlineColor',
    'outlineSize',
    'ownerAuthorNameColor',
    'showAuthorName',
    'showAvatar',
    'showBadge',
    'showMemberBadge',
    'showModeratorBadge',
    'showNewMemberBackground',
    'showOutline',
    'showSuperChatBackground',
    'showTimestamp',
    'timestampColor',
    'timestampSize',
  );

  localForage.setItem('chatStyles', chatStyles)
    .then(() => dispatch(saveChatStylesSuccess(chatStyles)))
    .catch(error => dispatch(saveChatStylesFail(error)));
};
