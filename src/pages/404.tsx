import React, { FC, ReactElement } from 'react'
import { Helmet } from 'react-helmet'

const NoMatch: FC = (): ReactElement => {
  return (
    <div className="py-4">
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>

      <h1 className="text-3xl font-normal mb-4">404 Not Found</h1>

      <p className="text-base">
        あなたのお探しのページは見つけることができませんでした。
      </p>
    </div>
  )
}

export default NoMatch
