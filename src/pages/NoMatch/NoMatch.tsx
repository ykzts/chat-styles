import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import React, { FC, ReactElement } from 'react'
import { Helmet } from 'react-helmet'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0)
    }
  })
)

const NoMatch: FC = (): ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>

      <Typography component="h1" variant="h3">
        404 Not Found
      </Typography>

      <Typography component="p" variant="body1">
        あなたのお探しのページは見つけることができませんでした。
      </Typography>
    </div>
  )
}

export default NoMatch
