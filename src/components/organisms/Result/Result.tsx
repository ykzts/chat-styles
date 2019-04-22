import { Chip, ChipSet } from '@material/react-chips'
import MaterialIcon from '@material/react-material-icon'
import copy from 'copy-text-to-clipboard'
import { highlight, languages } from 'prismjs'
import React, {
  FunctionComponent,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useRef
} from 'react'
import ChatStylesContext from '../../../context/ChatStylesContext'
import { generateStyleSheet } from '../../../utils/styleSheet'
import Headline from '../../atoms/Headline'
import classes from './Result.module.scss'

import '@material/react-chips/index.scss'
import '@material/react-material-icon/index.scss'
import 'prismjs/themes/prism-okaidia.css'

const Result: FunctionComponent = (): ReactElement => {
  const codeRef = useRef<HTMLElement>(null)
  const { chatStyles } = useContext(ChatStylesContext)
  const styleSheet = useMemo(
    () => (chatStyles ? generateStyleSheet(chatStyles) : ''),
    [chatStyles]
  )
  const handleCopyClick = useCallback(() => {
    copy(styleSheet)

    const selection = window.getSelection()

    selection!.selectAllChildren(codeRef.current!)
  }, [chatStyles])

  const actions = (
    <ChipSet>
      <Chip
        label="コピーする"
        leadingIcon={<MaterialIcon icon="file_copy" />}
        onClick={handleCopyClick}
      />
    </ChipSet>
  )

  return (
    <section className={classes.root}>
      <Headline actions={actions} icon="code">
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
