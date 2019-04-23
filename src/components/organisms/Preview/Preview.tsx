import Switch from '@material/react-switch'
import classNames from 'classnames'
import React, {
  FunctionComponent,
  ReactElement,
  useCallback,
  useContext
} from 'react'
import ChatStylesContext from '../../../context/ChatStylesContext'
import PreviewContext from '../../../context/PreviewContext'
import PreviewFrame from '../../atoms/PreviewFrame'
import FormControl from '../../atoms/FormControl'
import Headline from '../../atoms/Headline'
import classes from './Preview.module.scss'

import '@material/react-switch/index.scss'

export const Preview: FunctionComponent = (): ReactElement => {
  const { chatStyles } = useContext(ChatStylesContext)
  const { invert, toggleInvert } = useContext(PreviewContext)

  const handleInvertChange = useCallback(() => {
    toggleInvert()
  }, [toggleInvert])

  return (
    <section className={classes.root}>
      <Headline
        actions={
          <FormControl htmlFor="invert" label="背景を暗くする">
            <Switch
              checked={invert}
              nativeControlId="invert"
              onChange={handleInvertChange}
            />
          </FormControl>
        }
        icon="visibility"
      >
        プレビュー
      </Headline>

      <div
        className={classNames(classes.preview, {
          [classes.previewInvert]: invert
        })}
      >
        <PreviewFrame chatStyles={chatStyles} />
      </div>
    </section>
  )
}

export default Preview
