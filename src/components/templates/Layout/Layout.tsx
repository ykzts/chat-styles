import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@material/react-top-app-bar'
import React, { FunctionComponent, ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../molecules/Footer'

import '@material/react-top-app-bar/index.scss'
import './Layout.scss'

type Props = {
  title: string
}

const Layout: FunctionComponent<Props> = ({
  children,
  title
}): ReactElement => (
  <>
    <Helmet
      bodyAttributes={{ class: 'mdc-typography' }}
      defaultTitle={title}
      titleTemplate={`%s - ${title}`}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata"
        rel="stylesheet"
      />
    </Helmet>

    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align="start">
          <TopAppBarTitle>{title}</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>

    <TopAppBarFixedAdjust>{children}</TopAppBarFixedAdjust>

    <Footer />
  </>
)

export default Layout
