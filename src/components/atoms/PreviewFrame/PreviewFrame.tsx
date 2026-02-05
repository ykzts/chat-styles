import React, {
  FunctionComponent,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import ChatStyles from 'types/ChatStyles'
import { generateStyleSheet } from 'utils/styleSheet'

type Props = {
  chatStyles: ChatStyles
}

const PreviewFrame: FunctionComponent<Props> = ({
  chatStyles
}): ReactElement => {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [frameHeight, setFrameHeight] = useState<number>(0)

  const handleLoadStyleSheet = useCallback(
    (event: MessageEvent): void => {
      setFrameHeight(event.data.frameHeight)
    },
    [setFrameHeight]
  )

  useEffect(() => {
    window.addEventListener('message', handleLoadStyleSheet)

    return (): void =>
      window.removeEventListener('message', handleLoadStyleSheet)
  }, [handleLoadStyleSheet])

  useEffect(() => {
    const win = frameRef.current && frameRef.current.contentWindow

    if (!win) return

    const styleSheet = generateStyleSheet(chatStyles)
    const styleSheetURL = URL.createObjectURL(
      new Blob([styleSheet], { type: 'text/css' })
    )

    if (frameHeight > 0) {
      win.postMessage({ url: styleSheetURL }, win.origin)
    } else {
      win.addEventListener('load', () =>
        win.postMessage({ url: styleSheetURL }, win.origin)
      )
    }
  }, [frameHeight, chatStyles])

  return (
    <iframe
      className="border-0 block w-full h-0"
      ref={frameRef}
      src="/preview/preview.html"
      style={{ height: `${frameHeight}px` }}
      title="chat preview"
    />
  )
}

export default PreviewFrame
