import React, { FunctionComponent, ReactElement } from 'react'
import classes from './FormControl.module.scss'

type Props = {
  htmlFor?: string
  label: string
}

const FormControl: FunctionComponent<Props> = ({
  children,
  htmlFor,
  label
}): ReactElement => {
  return (
    <div className={classes.root}>
      {children}

      <label className={classes.label} htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  )
}
export default FormControl
