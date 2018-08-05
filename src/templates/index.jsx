import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom/server';

const Html = ({ files, title }) => (
  <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <meta content="initial-scale=1,minimum-scale=1,width=device-width" name="viewport" />
      <title>
        {title}
      </title>
    </head>
    <body>
      <div id="root" />
      {files.js && files.js.map(path => (
        <script key={`script-${path}`} src={path} />
      ))}
    </body>
  </html>
);

Html.propTypes = {
  files: PropTypes.shape({
    js: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export const title = 'チャットスタイルジェネレーター';

export default ({ htmlWebpackPlugin: { files } }) => {
  const html = (
    <Html files={files} title={title} />
  );
  return [
    '<!DOCTYPE html>',
    ReactDOM.renderToStaticMarkup(html),
  ].join('\n');
};
