import React, { FC, MouseEvent, memo, useCallback, useState } from 'react'
import { ColorChangeHandler, ColorResult, SketchPicker } from 'react-color'
import { hex2rgb, rgb2hex } from 'utils/color'

type Props = {
  disabled?: boolean
  name: string
  onChange: (value: string) => void
  onBlur?: () => void
  value: string
}

const ColorPicker: FC<Props> = ({ disabled, onChange, value }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

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
      onChange(rgb2hex(color.rgb))
    },
    [onChange]
  )

  return (
    <div className="inline-block p-2">
      <button
        className={`w-7 h-7 border-0 rounded-full shadow cursor-pointer outline-none ${
          disabled ? 'shadow-none pointer-events-none' : ''
        }`}
        onClick={handleClick}
        style={{ backgroundColor: value }}
        type="button"
      />

      {anchorEl && (
        <div className="fixed inset-0 z-50" onClick={handleClose}>
          <div
            className="absolute"
            style={{
              top: anchorEl.getBoundingClientRect().bottom + window.scrollY,
              left: anchorEl.getBoundingClientRect().left + window.scrollX
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <SketchPicker onChange={handleChange} color={hex2rgb(value)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(
  ColorPicker,
  (prevProps, nextProps) =>
    prevProps.disabled === nextProps.disabled &&
    prevProps.value === nextProps.value
)
