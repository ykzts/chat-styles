import { formValueSelector } from 'redux-form';

const KNOWN_FONTS = [
  'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css',
];

const selector = formValueSelector('chat');

const color = ({ rgb }) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;

const generateTextShadow = ({ outlineColor, outlineSize }) => {
  const values = [];
  for (let x = -outlineSize; x <= outlineSize; x += Math.ceil(outlineSize / 4)) {
    for (let y = -outlineSize; y <= outlineSize; y += Math.ceil(outlineSize / 4)) {
      values.push(`${x}px ${y}px ${color(outlineColor)}`);
    }
  }
  return `text-shadow: ${values.join(', ')};`;
};

const generateStyleSheet = ({
  avatarSize,
  outlineColor,
  outlineSize,
  showAvatar,
  showOutline,
  showTimestamp,
  timestampColor,
  timestampSize,
}) => [
  KNOWN_FONTS.map(font => `@import url("${font}");`).join('\n'),
  '',
  'body {',
  '  background-color: transparent !important;',
  '  font-family: "Noto Sans Japanese", sans-serif !important;',
  '  overflow-y: hidden !important;',
  '}',
  '',
  'yt-live-chat-renderer {',
  '  background-color: transparent !important;',
  '}',
  '',
  'yt-live-chat-ticker-renderer {',
  '  display: none; !important;',
  '}',
  '',
  'yt-live-chat-item-list-renderer {',
  '  --yt-live-chat-deleted-message-color: rgba(153, 153, 153, 0.5);',
  `  --yt-live-chat-item-timestamp-display: ${showTimestamp ? 'inline' : 'none'};`,
  '  --yt-live-chat-item-timestamp-margin: 0 5px 0 0;',
  '  --yt-live-chat-message-highlight-background-color: transparent;',
  '  --yt-live-chat-message-highlight-text-color: #ffd600;',
  '  --yt-live-chat-moderator-color: hsl(225, 84%, 66%);',
  '  --yt-live-chat-owner-color: #ffd600;',
  '  --yt-live-chat-paid-message-author-name-color: #fff;',
  '  --yt-live-chat-primary-text-color: #fff;',
  '  --yt-live-chat-secondary-text-color: #fff;',
  '  --yt-live-chat-sponsor-color: #107516;',
  `  --yt-live-chat-tertiary-text-color: ${color(timestampColor)};`,
  '',
  `  ${showOutline ? generateTextShadow({ outlineColor, outlineSize }) : ''};`,
  '}',
  '',
  '#item-scroller {',
  '  overflow-y: hidden !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer {',
  '  padding: 4px 5px !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer #author-photo {',
  `  display: ${showAvatar ? 'block' : 'none'};`,
  `  height: ${avatarSize}px;`,
  '  margin: 2px 5px 0 0 !important;',
  `  width: ${avatarSize}px;`,
  '}',
  '',
  'yt-live-chat-text-message-renderer #author-photo img {',
  '  height: 100%;',
  '  width: 100%;',
  '}',
  '',
  'yt-live-chat-text-message-renderer yt-live-chat-author-chip {',
  '  font-size: 20px !important;',
  '  line-height: 22px !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {',
  '  color: var(--yt-live-chat-secondary-text-color, hsla(0, 0%, 6.7%, .6));',
  '  content: ":";',
  '  font-weight: 500;',
  '  margin-left: 3px;',
  '  order: 2;',
  '}',
  '',
  'yt-live-chat-text-message-renderer[author-type="owner"] yt-live-chat-author-chip::after {',
  '  color: var(--yt-live-chat-message-highlight-text-color);',
  '}',
  '',
  'yt-live-chat-text-message-renderer[author-type="moderator"] yt-live-chat-author-chip::after {',
  '  color: var(--yt-live-chat-moderator-color);',
  '}',
  '',
  'yt-live-chat-text-message-renderer[author-type="member"] yt-live-chat-author-chip::after {',
  '  color: var(--yt-live-chat-sponsor-color);',
  '}',
  '',
  'yt-live-chat-text-message-renderer #author-name {',
  '  background-color: transparent !important;',
  '  padding: 0 !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer #message,',
  'yt-live-chat-text-message-renderer yt-formatted-string {',
  '  font-size: 18px !important;',
  '  line-height: 20px !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer #timestamp {',
  `  font-size: ${timestampSize}px !important;`,
  `  line-height: ${timestampSize + 2}px !important;`,
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer,',
  'yt-live-chat-paid-message-renderer {',
  '  padding: 4px 2px !important;',
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #author-photo,',
  'yt-live-chat-paid-message-renderer #author-photo {',
  `  display: ${showAvatar ? 'block' : 'none'} !important;`,
  `  height: ${avatarSize}px !important;`,
  '  margin: 2px 5px 0 2px !important;',
  `  width: ${avatarSize}px !important;`,
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #author-photo img,',
  'yt-live-chat-paid-message-renderer #author-photo img {',
  '  height: 100% !important;',
  '  width: 100% !important;',
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #card,',
  'yt-live-chat-paid-message-renderer #card {',
  '  box-shadow: none !important;',
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #event-text {',
  '  color: var(--yt-live-chat-paid-message-author-name-color)',
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #card {',
  '  padding: 4px 2px !important;',
  '}',
  '',
  'yt-live-chat-paid-message-renderer #header {',
  '  align-items: flex-start;',
  '  padding: 4px 2px !important;',
  '}',
  '',
  'yt-live-chat-paid-message-renderer #content {',
  '  padding: 4px 2px !important;',
  '}',
  '',
  'yt-live-chat-header-renderer,',
  'yt-live-chat-message-input-renderer,',
  'yt-live-chat-mode-change-message-renderer,',
  'yt-live-chat-restricted-participation-renderer {',
  '  display: none !important;',
  '',
].join('\n');

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
      'avatarSize',
      'outlineColor',
      'outlineSize',
      'showAvatar',
      'showOutline',
      'showTimestamp',
      'timestampColor',
      'timestampSize',
    ),
  );

  dispatch(createStyleSheetSuccess(styleSheet));
};
