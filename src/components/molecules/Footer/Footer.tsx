import '@material/react-typography/index.scss'

import React, { FunctionComponent, ReactElement } from 'react'
import classes from './Footer.module.scss'

const Footer: FunctionComponent = (): ReactElement => {
  return (
    <footer className={classes.root}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          {'Inspired by '}
          <a
            className={classes.link}
            href="https://chatv2.septapus.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chat v2.0 Style Generator
          </a>
        </li>
        <li className={classes.listItem}>
          {'Created by '}
          <a
            className={classes.link}
            href="https://ykzts.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Yamagishi Kazutoshi
          </a>
        </li>
        <li className={classes.listItem}>
          {'Designed by '}
          <a
            className={classes.link}
            href="https://7-nana.bio/"
            rel="noopener noreferrer"
            target="_blank"
          >
            7_nana
          </a>
        </li>
        <li className={classes.listItem}>
          <a
            className={classes.link}
            href="https://github.com/ykzts/chat-styles"
            rel="noopener noreferrer"
            target="_blank"
          >
            Source code
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
