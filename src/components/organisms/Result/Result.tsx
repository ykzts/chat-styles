import Chip from '@material-ui/core/Chip'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CodeIcon from '@material-ui/icons/Code'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import createStyles from '@material-ui/styles/createStyles'
import copy from 'copy-text-to-clipboard'
import { highlight, languages } from 'prismjs'
import React, {
  FC,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useRef
} from 'react'
import ChatStylesContext from '../../../context/ChatStylesContext'
import { generateStyleSheet } from '../../../utils/styleSheet'
import Headline from '../../atoms/Headline'

import 'prismjs/themes/prism-okaidia.css'

const useStyles = makeStyles(theme =>
  createStyles({
    code: {
      maxHeight: '512px'
    },

    root: {
      marginTop: theme.spacing(5)
    }
  })
)

const Result: FC = (): ReactElement => {
  const codeRef = useRef<HTMLElement>(null)
  const { chatStyles } = useContext(ChatStylesContext)
  const styleSheet = useMemo(
    () => (chatStyles ? generateStyleSheet(chatStyles) : ''),
    [chatStyles]
  )
  const classes = useStyles()

  const handleCopyClick = useCallback(() => {
    copy(styleSheet)

    const selection = window.getSelection()

    selection!.selectAllChildren(codeRef.current!)
  }, [styleSheet])

  const actions = (
    <>
      <Chip
        icon={<FileCopyIcon />}
        label="コピーする"
        onClick={handleCopyClick}
      />
    </>
  )

  return (
    <section className={classes.root}>
      <Headline actions={actions} icon={<CodeIcon />}>
        カスタムCSS
      </Headline>

      <pre className={`${classes.code} language-css`}>
        <code
          className="language-css"
          dangerouslySetInnerHTML={{
            __html: highlight(styleSheet, languages.css, 'css')
          }}
          ref={codeRef}
        />
      </pre>
    </section>
  )
}

export default Result
