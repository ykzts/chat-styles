import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import React, { FC, ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../molecules/Footer'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(4)
    }
  })
)

type Props = {
  title: string
}

const Layout: FC<Props> = ({ children, title }): ReactElement => {
  const classes = useStyles()

  return (
    <>
      <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`}>
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?display=swap&amp;family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Inconsolata"
          rel="stylesheet"
        />
      </Helmet>

      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <Typography noWrap variant="h6">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.container}>{children}</Container>

      <Footer />
    </>
  )
}

export default Layout
