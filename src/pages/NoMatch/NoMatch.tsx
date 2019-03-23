import { Body1, Headline3 } from '@material/react-typography'
import React, { FunctionComponent, ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import classes from './NoMatch.module.scss'

import '@material/react-typography/index.scss'

const NoMatch: FunctionComponent = (): ReactElement => {
  return (
    <div className={classes.root}>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>

      <Headline3 tag="h1">404 Not Found</Headline3>

      <Body1>あなたのお探しのページは見つけることができませんでした。</Body1>
    </div>
  )
}

export default NoMatch
