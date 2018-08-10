import * as React from 'react';

type Script = {
  integrity?: string,
  src: string,
};

type Props = {
  scripts: Array<Script>,
  title: string,
};

export default ({ scripts, title }: Props) => (
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
