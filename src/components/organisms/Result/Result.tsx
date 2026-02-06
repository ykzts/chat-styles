import { Highlight, themes } from 'prism-react-renderer'
import React, { FC, useCallback, useContext, useMemo, useRef } from 'react'
import { Code2, Copy } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Headline from 'components/atoms/Headline'
import ChatStylesContext from 'context/ChatStylesContext'
import { generateStyleSheet } from 'utils/styleSheet'

const Result: FC = () => {
  const t = useTranslations('result')
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
      <Copy className="w-5 h-5" />
      {t('copyButton')}
    </button>
  )

  return (
    <section className="mt-10">
      <Headline actions={actions} icon={<Code2 className="w-6 h-6" />}>
        {t('heading')}
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
