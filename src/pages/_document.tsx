import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="width=device-width" name="viewport" />
          <meta content="#ffc107" name="theme-color" />
          <link href="/manifest.json" rel="manifest" />
          <link href="/favicon.ico" rel="icon" />
          <meta
            content="Chat StylesはYouTube Liveのチャットの見た目を変更するCSSを生成するためのツールです。OBS StudioのブラウザソースのカスタムCSSとして使われることを前提としています。"
            name="description"
          />
          <meta content="/favicon-192x192.png" property="og:image" />
          <meta content="192" property="og:image:height" />
          <meta content="192" property="og:image:width" />
          <meta content="" property="og:title" />
          <meta content="website" property="og:type" />
          <meta content="summary" name="twitter:card" />
          <meta
            content="Chat StylesはYouTube Liveのチャットの見た目を変更するCSSを生成するためのツールです。OBS StudioのブラウザソースのカスタムCSSとして使われることを前提としています。"
            name="twitter:description"
          />
          <meta content="/favicon-192x192.png" name="twitter:image" />
          <meta content="Chat Styles" name="twitter:title" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
