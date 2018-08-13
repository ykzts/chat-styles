import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom/server';

const Html = ({ scripts, title }) => (
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
      {scripts.map(scriptProps => (
        <script
          crossOrigin="anonymous"
          key={`script-${scriptProps.src}`}
          {...scriptProps}
        />
      ))}
    </body>
  </html>
);

Html.propTypes = {
  scripts: PropTypes.shape({
    integrity: PropTypes.string,
    src: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export const title = 'Chat Styles';

export default ({ htmlWebpackPlugin: { files } }) => {
  const hasIntegrity = Array.isArray(files.jsIntegrity);
  const scripts = files.js.map((src, i) => ({
    src,
    ...(hasIntegrity && files.jsIntegrity[i] ? {
      integrity: files.jsIntegrity[i],
    } : {}),
  }));
  const html = (
    <Html scripts={scripts} title={title} />
  );
  return [
    '<!DOCTYPE html>',
    ReactDOM.renderToStaticMarkup(html),
  ].join('\n');
};
