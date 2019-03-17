import localForage from 'localforage'
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState
} from 'react'

export interface PreviewState {
  toggleInvert: () => void
  invert: boolean
}

const PreviewContext = React.createContext<PreviewState>({
  toggleInvert: () => {},
  invert: false
})

export default PreviewContext

const PreviewProvider: FunctionComponent = ({ children }): ReactElement => {
  const [invert, setInvert] = useState<boolean>(false)

  useEffect(() => {
    localForage.getItem<boolean>('preview.invert').then(invert => {
      setInvert(invert)
    })
  })

  return (
    <PreviewContext.Provider
      value={{
        invert,
        toggleInvert: () => {
          localForage
            .setItem<boolean>('preview.invert', !invert)
            .then(newInvert => setInvert(newInvert))
        }
      }}
    >
      {children}
    </PreviewContext.Provider>
  )
}

export { PreviewProvider }
