import React, { FC, useCallback, useContext } from 'react'
import { Eye } from 'lucide-react'
import PreviewFrame from 'components/atoms/PreviewFrame'
import Headline from 'components/atoms/Headline'
import ChatStylesContext from 'context/ChatStylesContext'
import PreviewContext from 'context/PreviewContext'

export const Preview: FC = () => {
  const { chatStyles } = useContext(ChatStylesContext)
  const { invert, toggleInvert } = useContext(PreviewContext)

  const handleInvertChange = useCallback(() => {
    if (typeof toggleInvert === 'function') toggleInvert()
  }, [toggleInvert])

  return (
    <section className="sticky top-0">
      <Headline
        actions={
          <label className="flex items-center cursor-pointer">
            <span className="mr-2 text-sm">背景を暗くする</span>
            <input
              type="checkbox"
              checked={invert}
              onChange={handleInvertChange}
              className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
            />
          </label>
        }
        icon={<Eye className="w-6 h-6" />}
      >
        プレビュー
      </Headline>

      <div
        className={`min-h-[500px] p-2 sm:p-4 shadow-sm rounded ${
          invert ? 'bg-gray-800' : 'bg-white'
        }`}
        style={{
          backgroundImage: invert
            ? 'linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333 100%), linear-gradient(45deg, #333 25%, #444 25%, #444 75%, #333 75%, #333 100%)'
            : 'linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%), linear-gradient(45deg, #eee 25%, #fff 25%, #fff 75%, #eee 75%, #eee 100%)',
          backgroundPosition: '0 0, 15px 15px',
          backgroundRepeat: 'repeat',
          backgroundSize: '30px 30px'
        }}
      >
        <PreviewFrame chatStyles={chatStyles} />
      </div>
    </section>
  )
}

export default Preview
