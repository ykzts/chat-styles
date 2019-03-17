import Button from '@material/react-button'
import classNames from 'classnames'
import React, {
  FunctionComponent,
  ReactElement,
  memo,
  useCallback,
  useState
} from 'react'
import { ColorResult, SketchPicker } from 'react-color'
import { hex2rgb, rgb2hex } from '../../../utils/color'
import classes from './ColorPicker.module.scss'

import '@material/react-button/index.scss'

type Props = {
  disabled?: boolean
  name: string
  onChange: Function // TODO: fix me
  value: string
}

const ColorPicker: FunctionComponent<Props> = ({
  disabled,
  name,
  onChange,
  value
}): ReactElement => {
  const [open, setOpen] = useState<boolean>(false)

  const openPopover = useCallback(() => {
    setOpen(true)
  }, [open])

  const closePopover = useCallback(() => {
    setOpen(false)
  }, [open])

  const handleChange = useCallback(
    (color: ColorResult): void => {
      onChange(name)(rgb2hex(color.rgb))
    },
    [value]
  )

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        disabled={disabled}
        onClick={openPopover}
        raised
        style={{ backgroundColor: value }}
        type="button"
      />
      <div
        className={classNames(classes.popover, { [classes.popoverOpen]: open })}
      >
        <div className={classes.backdrop} onClick={closePopover} />
        <SketchPicker onChange={handleChange} color={hex2rgb(value)} />
      </div>
    </div>
  )
}

export default memo(
  ColorPicker,
  (prevProps, nextProps) =>
    prevProps.disabled === nextProps.disabled &&
    prevProps.value === nextProps.value
)
