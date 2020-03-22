import Link from '@material-ui/core/Link'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import React, { FC, ReactElement } from 'react'

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      lineHeight: 1.5,
      listStyleType: 'none',
      margin: 0,
      padding: 0
    },

    listItem: {
      margin: 0,
      padding: 0,
      textAlign: 'right'
    },

    root: {
      backgroundColor: '#f5f5f5',
      color: '#424242',
      fontSize: '0.9rem',
      marginTop: theme.spacing(6),
      padding: theme.spacing(3, 2, 4)
    }
  })
)

const Footer: FC = (): ReactElement => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          {'Inspired by '}
          <Link
            href="https://chatv2.septapus.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chat v2.0 Style Generator
          </Link>
        </li>
        <li className={classes.listItem}>
          {'Created by '}
          <Link
            href="https://ykzts.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Yamagishi Kazutoshi
          </Link>
        </li>
        <li className={classes.listItem}>
          {'Designed by '}
          <Link
            href="https://7-nana.bio/"
            rel="noopener noreferrer"
            target="_blank"
          >
            7_nana
          </Link>
        </li>
        <li className={classes.listItem}>
          <Link
            href="https://github.com/ykzts/chat-styles"
            rel="noopener noreferrer"
            target="_blank"
          >
            Source code
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
