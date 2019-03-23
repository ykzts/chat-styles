import { Cell, Grid, Row } from '@material/react-layout-grid'
import React, { FunctionComponent, ReactElement } from 'react'
import Preview from '../../components/organisms/Preview'
import Result from '../../components/organisms/Result'
import StylesForm from '../../components/organisms/StylesForm'
import { ChatStylesProvider } from '../../context/ChatStylesContext'
import { PreviewProvider } from '../../context/PreviewContext'

import '@material/react-layout-grid/index.scss'

const Generator: FunctionComponent = (): ReactElement => {
  return (
    <ChatStylesProvider>
      <PreviewProvider>
        <Grid>
          <Row>
            <Cell columns={6}>
              <StylesForm />
            </Cell>
            <Cell columns={6}>
              <Preview />
            </Cell>
          </Row>
          <Row>
            <Cell columns={12}>
              <Result />
            </Cell>
          </Row>
        </Grid>
      </PreviewProvider>
    </ChatStylesProvider>
  )
}

export default Generator
