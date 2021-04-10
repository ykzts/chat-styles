import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import classNames from 'classnames'
import type { VFC } from 'react'
import { MdVisibility } from 'react-icons/md'
import Headline from 'components/headline'
import useInvert from 'hooks/use-invert'
import PreviewFrame from './frame'
import styles from './index.module.css'

export const Preview: VFC = () => {
  const [invert, handleInvertChange] = useInvert()

  return (
    <section>
      <Headline
        actions={
          <FormControlLabel
            control={
              <Switch
                checked={invert}
                color="primary"
                onChange={handleInvertChange}
              />
            }
            label="背景を暗くする"
            labelPlacement="start"
          />
        }
        icon={<MdVisibility />}
        label="プレビュー"
      />

      <div
        className={classNames('p-1', 'rounded', 'shadow', styles.preview, {
          [styles.previewInvert]: invert
        })}
      >
        <PreviewFrame />
      </div>
    </section>
  )
}

export default Preview
