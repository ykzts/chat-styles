import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import type { FC } from 'react'
import { Helmet } from 'react-helmet'
import Layout from 'components/templates/Layout'

const description =
  'Chat StylesはYouTube Liveのチャットの見た目を変更するCSSを生成するためのツールです。OBS StudioのブラウザソースのカスタムCSSとして使われることを前提としています。'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side')

    jssStyles?.parentNode?.removeChild(jssStyles)
  }, [])

  return (
    <>
      <Helmet
        defaultTitle="Chat Styles"
        htmlAttributes={{ lang: 'ja' }}
        titleTemplate="%s - Chat Styles"
      >
        <meta content={description} name="description" />
        <meta content="/favicon-192x192.png" property="og:image" />
        <meta content="192" property="og:image:height" />
        <meta content="192" property="og:image:width" />
        <meta content="Chat Styles" property="og:title" />
        <meta content="website" property="og:type" />
        <meta content="summary" name="twitter:card" />
        <meta content={description} name="twitter:description" />
        <meta content="/favicon-192x192.png" name="twitter:image" />
        <meta content="Chat Styles" name="twitter:title" />
        <link href="/manifest.json" rel="manifest" />
        <link href="/favicon.ico" rel="icon" />
      </Helmet>

      <Layout title="Chat Styles">
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
