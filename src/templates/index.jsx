import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import Html from '../components/Html';

export const title = 'Chat Styles';

const normalize = (files) => {
  const hasIntegrity = Array.isArray(files.jsIntegrity);
  const scripts = files.js.map((src, i) => ({
    src,
    ...(hasIntegrity && files.jsIntegrity[i] ? {
      integrity: files.jsIntegrity[i],
    } : {}),
  }));

  return { scripts };
};

export default ({ htmlWebpackPlugin: { files } }) => {
  const { scripts } = normalize(files);
  const html = (
    <Html scripts={scripts} title={title} />
  );

  return [
    '<!DOCTYPE html>',
    ReactDOM.renderToStaticMarkup(html),
  ].join('\n');
};
