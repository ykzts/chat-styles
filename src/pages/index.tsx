import Grid from '@material-ui/core/Grid'
import React, { FC } from 'react'
import Preview from 'components/organisms/Preview'
import Result from 'components/organisms/Result'
import StylesForm from 'components/organisms/StylesForm'
import { ChatStylesProvider } from 'context/ChatStylesContext'
import { PreviewProvider } from 'context/PreviewContext'

const Generator: FC = () => {
  return (
    <ChatStylesProvider>
      <PreviewProvider>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <StylesForm />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Preview />
          </Grid>

          <Grid item xs={12}>
            <Result />
          </Grid>
        </Grid>
      </PreviewProvider>
    </ChatStylesProvider>
  )
}

export default Generator
