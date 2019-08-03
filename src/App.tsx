import React, { FC, ReactElement, Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/templates/Layout'

const App: FC = (): ReactElement => (
  <Layout title="Chat Styles">
    <Suspense fallback={null}>
      <Switch>
        <Route
          component={lazy(() => import('./pages/Generator'))}
          exact
          path="/"
        />
        <Route component={lazy(() => import('./pages/NoMatch'))} />
      </Switch>
    </Suspense>
  </Layout>
)

export default App
