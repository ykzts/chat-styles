import Chip from '@material-ui/core/Chip'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CodeIcon from '@material-ui/icons/Code'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import createStyles from '@material-ui/styles/createStyles'
import classNames from 'classnames'
import { Highlight, themes } from 'prism-react-renderer'
import React, { FC, useCallback, useContext, useMemo, useRef } from 'react'
import Headline from 'components/atoms/Headline'
import ChatStylesContext from 'context/ChatStylesContext'
import { generateStyleSheet } from 'utils/styleSheet'

const useStyles = makeStyles((theme) =>
  createStyles({
    code: {
      fontSize: '1rem',
      fontFamily: 'Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace',
      overflow: 'auto',
      maxHeight: '512px',
      padding: theme.spacing(1.5),

      '& code': {
        fontFamily: 'inherit'
      }
    },

    root: {
      marginTop: theme.spacing(5)
    }
  })
)

const Result: FC = () => {
  const codeRef = useRef<HTMLElement>(null)
  const { chatStyles } = useContext(ChatStylesContext)
  const styleSheet = useMemo(
    () => (chatStyles ? generateStyleSheet(chatStyles) : ''),
    [chatStyles]
  )
  const classes = useStyles()

  const handleCopyClick = useCallback(() => {
    if (!codeRef.current) return

    void import('copy-text-to-clipboard').then(({ default: copy }) => {
      copy(styleSheet)
    })

    const selection = window.getSelection()

    selection?.selectAllChildren(codeRef.current)
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

      <Highlight code={styleSheet} language="css" theme={themes.nightOwl}>
        {({
          className,
          getLineProps,
          getTokenProps,
          style,
          tokens
        }): React.JSX.Element => (
          <pre className={classNames(classes.code, className)} style={style}>
            <code ref={codeRef}>
              {tokens.map((line, i) => (
                <>
                  <span
                    key={`line-${i}`}
                    {...getLineProps({ line, key: `line-${i}` })}
                  >
                    {line.map((token, key) => (
                      <span
                        key={`token-${key}`}
                        {...getTokenProps({ token, key: `token-${key}` })}
                      />
                    ))}
                  </span>
                  {'\n'}
                </>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </section>
  )
}

export default Result
