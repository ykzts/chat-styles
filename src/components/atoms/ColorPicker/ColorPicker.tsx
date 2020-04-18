import Popover from '@material-ui/core/Popover'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import classNames from 'classnames'
import { FormikHandlers } from 'formik'
import React, { FC, MouseEvent, memo, useCallback, useState } from 'react'
import { ColorChangeHandler, ColorResult, SketchPicker } from 'react-color'
import { hex2rgb, rgb2hex } from 'utils/color'

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      border: 0,
      borderRadius: '50%',
      boxShadow: theme.shadows[1],
      cursor: 'pointer',
      height: '28px',
      outline: 0,
      width: '28px'
    },

    buttonDisabled: {
      boxShadow: 'none',
      pointerEvents: 'none'
    },

    root: {
      display: 'inline-block',
      padding: theme.spacing(1)
    }
  })
)

type Props = {
  disabled?: boolean
  name: string
  onChange: FormikHandlers['handleChange']
  value: string
}

const ColorPicker: FC<Props> = ({ disabled, name, onChange, value }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const classes = useStyles()

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    },
    [setAnchorEl]
  )

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  const handleChange: ColorChangeHandler = useCallback(
    (color: ColorResult): void => {
      onChange(name)(rgb2hex(color.rgb))
    },
    [name, onChange]
  )

  return (
    <div className={classes.root}>
      <button
        className={classNames(classes.button, {
          [classes.buttonDisabled]: disabled
        })}
        onClick={handleClick}
        style={{ backgroundColor: value }}
        type="button"
      />

      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom'
        }}
        onClose={handleClose}
        open={!!anchorEl}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top'
        }}
      >
        <SketchPicker onChange={handleChange} color={hex2rgb(value)} />
      </Popover>
    </div>
  )
}

export default memo(
  ColorPicker,
  (prevProps, nextProps) =>
    prevProps.disabled === nextProps.disabled &&
    prevProps.value === nextProps.value
)
