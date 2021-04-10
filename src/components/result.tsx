import Chip from '@material-ui/core/Chip'
import classNames from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'
import prismTheme from 'prism-react-renderer/themes/nightOwl'
import type { VFC } from 'react'
import { useCallback, useRef } from 'react'
import { MdCode, MdContentCopy } from 'react-icons/md'
import Headline from 'components/headline'
import useStyleSheet from 'hooks/use-style-sheet'

const Result: VFC = () => {
  const codeRef = useRef<HTMLElement>(null)
  const styleSheet = useStyleSheet()

  const handleCopyClick = useCallback(() => {
    if (!codeRef.current) return

    void import('copy-text-to-clipboard').then(({ default: copy }) => {
      copy(styleSheet)
    })

    const selection = window.getSelection()

    selection?.selectAllChildren(codeRef.current)
  }, [styleSheet])

  return (
    <section className="mt-10">
      <Headline
        actions={
          <Chip
            icon={<MdContentCopy />}
            label="コピーする"
            onClick={handleCopyClick}
          />
        }
        icon={<MdCode />}
        label="カスタムCSS"
      />

      <Highlight
        {...defaultProps}
        code={styleSheet}
        language="css"
        theme={prismTheme}
      >
        {({ className, getLineProps, getTokenProps, style, tokens }) => (
          <pre
            className={classNames(
              'max-h-96',
              'overflow-auto',
              'p-2',
              'rounded',
              'text-base',
              className
            )}
            style={style}
          >
            <code ref={codeRef}>
              {tokens.map((line, i) => (
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
                  {'\n'}
                </span>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </section>
  )
}

export default Result
