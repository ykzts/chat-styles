import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { Helmet } from 'react-helmet'

export default class MyDocument extends Document {
  render(): JSX.Element {
    const helmet = Helmet.renderStatic()

    return (
      <Html {...helmet.htmlAttributes.toComponent()}>
        <Head>
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
        </Head>
        <body {...helmet.bodyAttributes.toComponent()}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
