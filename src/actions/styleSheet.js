import generateStyleSheet from '../utils/generateStyleSheet';
import chatStylesSelector from '../selectors/chatStylesSelector';

export const STYLE_SHEET_CREATE_FAIL = 'STYLE_SHEET_CREATE_FAIL';
export const STYLE_SHEET_CREATE_REQUEST = 'STYLE_SHEET_CREATE_REQUEST';
export const STYLE_SHEET_CREATE_SUCCESS = 'STYLE_SHEET_CREATE_SUCCESS';

export const createStyleSheetFail = error => ({
  error,
  type: STYLE_SHEET_CREATE_FAIL,
});

export const createStyleSheetRequest = () => ({
  type: STYLE_SHEET_CREATE_REQUEST,
});

export const createStyleSheetSuccess = rawText => ({
  rawText,
  type: STYLE_SHEET_CREATE_SUCCESS,
});

export const createStyleSheet = () => (dispatch, getState) => {
  dispatch(createStyleSheetRequest());

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
  const styleSheet = generateStyleSheet(chatStyles);

  dispatch(createStyleSheetSuccess(styleSheet));
};
