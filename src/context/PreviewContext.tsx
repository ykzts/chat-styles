import localForage from 'localforage'
import {
  type FC,
  type ReactNode,
  createContext,
  useEffect,
  useState
} from 'react'

export type PreviewState = {
  toggleInvert?: () => void
  invert: boolean
}

const PreviewContext = createContext<PreviewState>({
  invert: false
})

export default PreviewContext

type Props = {
  children: ReactNode
}

const PreviewProvider: FC<Props> = ({ children }) => {
  const [invert, setInvert] = useState<boolean>(false)

  useEffect(() => {
    localForage
      .getItem<boolean>('preview.invert')
      .then((value) => !!value)
      .then((invert) => {
        setInvert(invert)
      })
      .catch((error) => {
        console.error(error)
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
            .catch((error) => {
              console.error(error)
            })
        }
      }}
    >
      {children}
    </PreviewContext.Provider>
  )
}

export { PreviewProvider }
