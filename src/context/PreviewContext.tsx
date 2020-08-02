import localForage from 'localforage'
import React, { FC, createContext, useEffect, useState } from 'react'

export type PreviewState = {
  toggleInvert?: () => void
  invert: boolean
}

const PreviewContext = createContext<PreviewState>({
  invert: false
})

export default PreviewContext

const PreviewProvider: FC = ({ children }) => {
  const [invert, setInvert] = useState<boolean>(false)

  useEffect(() => {
    localForage
      .getItem<boolean>('preview.invert')
      .then((value) => !!value)
      .then((invert) => {
        setInvert(invert)
      })
  })

  return (
    <PreviewContext.Provider
      value={{
        invert,
        toggleInvert: (): void => {
          localForage
            .setItem<boolean>('preview.invert', !invert)
            .then((newInvert) => setInvert(newInvert))
        }
      }}
    >
      {children}
    </PreviewContext.Provider>
  )
}

export { PreviewProvider }
