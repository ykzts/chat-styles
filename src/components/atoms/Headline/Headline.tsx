import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { type FC, type ReactElement, type ReactNode } from 'react'

const useStyles = makeStyles((theme) =>
  createStyles({
    actions: {
      paddingLeft: theme.spacing(2)
    },

    root: {
      display: 'flex',
      flexDirection: 'column',

      [theme.breakpoints.up('sm')]: {
        alignItems: 'center',
        flexDirection: 'row'
      }
    },

    title: {
      alignItems: 'center',
      display: 'flex',
      flexBasis: 0,
      flexGrow: 1
    },

    titleIcon: {
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(0.5)
    }
  })
)

interface Props {
  actions?: ReactNode
  children: ReactNode
  icon?: string | ReactElement
}

const Headline: FC<Props> = ({ actions, children, icon }) => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <Typography
        className={classes.title}
        component="h2"
        gutterBottom
        variant="subtitle1"
      >
        {icon && <div className={classes.titleIcon}>{icon}</div>}

        {children}
      </Typography>

      {actions && <div className={classes.actions}>{actions}</div>}
    </header>
  )
}

export default Headline
