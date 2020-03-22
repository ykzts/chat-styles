import Popover from '@material-ui/core/Popover'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import classNames from 'classnames'
import React, {
  FC,
  MouseEvent,
  ReactElement,
  memo,
  useCallback,
  useState
} from 'react'
import { ColorResult, SketchPicker } from 'react-color'
import { hex2rgb, rgb2hex } from '../../../utils/color'

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      borderRadius: '50%',
      boxShadow: theme.shadows[1],
      cursor: 'pointer',
      height: '28px',
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

interface Props {
  disabled?: boolean
  name: string
  onChange: Function // TODO: fix me
  value: string
}

const ColorPicker: FC<Props> = ({
  disabled,
  name,
  onChange,
  value
}): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const classes = useStyles()

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      setAnchorEl(event.currentTarget)
    },
    [setAnchorEl]
  )

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  const handleChange = useCallback(
    (color: ColorResult): void => {
      onChange(name)(rgb2hex(color.rgb))
    },
    [name, onChange]
  )

  return (
    <div className={classes.root}>
      <div
        className={classNames(classes.button, {
          [classes.buttonDisabled]: disabled
        })}
        onClick={handleClick}
        style={{ backgroundColor: value }}
        role="button"
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
