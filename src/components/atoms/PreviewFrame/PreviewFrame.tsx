import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import React, {
  FunctionComponent,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { ChatStyles } from '../../../context/ChatStylesContext'
import { generateStyleSheet } from '../../../utils/styleSheet'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      border: 0,
      display: 'block',
      height: 0,
      width: '100%'
    }
  })
)

type Props = {
  chatStyles: ChatStyles
}

const PreviewFrame: FunctionComponent<Props> = ({
  chatStyles
}): ReactElement => {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [frameHeight, setFrameHeight] = useState<number>(0)
  const classes = useStyles()

  const handleLoadStyleSheet = useCallback(
    (event: MessageEvent): void => {
      setFrameHeight(event.data.frameHeight)
    },
    [setFrameHeight]
  )

  useEffect(() => {
    window.addEventListener('message', handleLoadStyleSheet)

    return () => window.removeEventListener('message', handleLoadStyleSheet)
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
      className={classes.root}
      ref={frameRef}
      src="/preview/preview.html"
      style={{ height: `${frameHeight}px` }}
      title="chat preview"
    />
  )
}

export default PreviewFrame
