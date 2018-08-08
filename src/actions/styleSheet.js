import { formValueSelector } from 'redux-form';
import generateStyleSheet from '../utils/generateStyleSheet';

const selector = formValueSelector('chat');

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

  const styleSheet = generateStyleSheet(
    selector(
      getState(),
      'authorNameColor',
      'authorNameSize',
      'avatarSize',
      'memberAuthorNameColor',
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
    ),
  );

  dispatch(createStyleSheetSuccess(styleSheet));
};
