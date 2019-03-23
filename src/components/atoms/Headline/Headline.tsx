import MaterialIcon from '@material/react-material-icon'
import { Headline5 } from '@material/react-typography'
import React, { FunctionComponent, ReactElement, ReactNode } from 'react'
import classes from './Headline.module.scss'

import '@material/react-material-icon/index.scss'
import '@material/react-typography/index.scss'

interface Props {
  actions?: ReactNode
  icon?: string
}

const Headline: FunctionComponent<Props> = ({
  actions,
  children,
  icon
}): ReactElement => {
  return (
    <header className={classes.root}>
      <Headline5 className={classes.title} tag="h2">
        {icon && <MaterialIcon className={classes.titleIcon} icon={icon} />}

        {children}
      </Headline5>

      {actions && <div className={classes.actions}>{actions}</div>}
    </header>
  )
}

export default Headline
