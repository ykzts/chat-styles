'use client'

import React from 'react'
import Preview from 'components/organisms/Preview'
import Result from 'components/organisms/Result'
import StylesForm from 'components/organisms/StylesForm'
import { ChatStylesProvider } from 'context/ChatStylesContext'
import { PreviewProvider } from 'context/PreviewContext'

export default function Home() {
  return (
    <ChatStylesProvider>
      <PreviewProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-1">
            <StylesForm />
          </div>
          <div className="col-span-1">
            <Preview />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <Result />
          </div>
        </div>
      </PreviewProvider>
    </ChatStylesProvider>
  )
}
