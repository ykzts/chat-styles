import { ServerStyleSheets } from '@material-ui/core/styles'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import type { DocumentContext, DocumentInitialProps } from 'next/document'
import React from 'react'
import { Helmet } from 'react-helmet'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets()
    const initialProps = await super.getInitialProps({
      ...ctx,
      renderPage: () =>
        ctx.renderPage({
          enhanceApp: (App) =>
            function EnhancedApp(props) {
              return sheets.collect(<App {...props} />)
            }
        })
    })

    return {
      ...initialProps,
      styles: [initialProps.styles, sheets.getStyleElement()]
    }
  }

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
