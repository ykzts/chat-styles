import { AppProps } from 'next/app'
import React, { FC } from 'react'
import Layout from 'components/templates/Layout'

import 'prismjs/themes/prism-okaidia.css'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout title="Chat Styles">
    <Component {...pageProps} />
  </Layout>
)

export default App
