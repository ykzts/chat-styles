import { Highlight, themes } from 'prism-react-renderer'
import React, { FC, useCallback, useContext, useMemo, useRef } from 'react'
import Headline from 'components/atoms/Headline'
import ChatStylesContext from 'context/ChatStylesContext'
import { generateStyleSheet } from 'utils/styleSheet'

// Material Icons as inline SVG
const CodeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
)

const FileCopyIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
  </svg>
)

const Result: FC = () => {
  const codeRef = useRef<HTMLElement>(null)
  const { chatStyles } = useContext(ChatStylesContext)
  const styleSheet = useMemo(
    () => (chatStyles ? generateStyleSheet(chatStyles) : ''),
    [chatStyles]
  )

  const handleCopyClick = useCallback(() => {
    if (!codeRef.current) return

    void import('copy-text-to-clipboard').then(({ default: copy }) => {
      copy(styleSheet)
    })

    const selection = window.getSelection()

    selection?.selectAllChildren(codeRef.current)
  }, [styleSheet])

  const actions = (
    <button
      onClick={handleCopyClick}
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-medium cursor-pointer transition-colors"
    >
      <FileCopyIcon />
      コピーする
    </button>
  )

  return (
    <section className="mt-10">
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
          <pre
            className={`text-base font-mono overflow-auto max-h-[512px] p-3 ${className}`}
            style={style}
          >
            <code ref={codeRef} className="font-inherit">
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
