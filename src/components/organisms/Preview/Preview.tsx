import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch'
import VisibilityIcon from '@material-ui/icons/Visibility'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import classNames from 'classnames'
import React, { FC, useCallback, useContext } from 'react'
import PreviewFrame from 'components/atoms/PreviewFrame'
import Headline from 'components/atoms/Headline'
import ChatStylesContext from 'context/ChatStylesContext'
import PreviewContext from 'context/PreviewContext'

const useStyles = makeStyles((theme) =>
  createStyles({
    preview: {
      backgroundImage: [
        'linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%)',
        'linear-gradient(45deg, #eee 25%, #fff 25%, #fff 75%, #eee 75%, #eee 100%)'
      ].join(', '),
      backgroundPosition: '0 0, 15px 15px',
      backgroundRepeat: 'repeat',
      backgroundSize: '30px 30px',
      minHeight: '500px',
      padding: theme.spacing(1),

      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(2)
      }
    },

    previewInvert: {
      backgroundImage: [
        'linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333 100%)',
        'linear-gradient(45deg, #333 25%, #444 25%, #444 75%, #333 75%, #333 100%)'
      ].join(', ')
    },

    root: {
      position: 'sticky',
      top: 0
    }
  })
)

export const Preview: FC = () => {
  const { chatStyles } = useContext(ChatStylesContext)
  const { invert, toggleInvert } = useContext(PreviewContext)
  const classes = useStyles()

  const handleInvertChange = useCallback(() => {
    if (typeof toggleInvert === 'function') toggleInvert()
  }, [toggleInvert])

  return (
    <section className={classes.root}>
      <Headline
        actions={
          <FormControlLabel
            control={
              <Switch
                checked={invert}
                color="primary"
                onChange={handleInvertChange}
              />
            }
            label="背景を暗くする"
            labelPlacement="start"
          />
        }
        icon={<VisibilityIcon />}
      >
        プレビュー
      </Headline>

      <Paper
        className={classNames(classes.preview, {
          [classes.previewInvert]: invert
        })}
      >
        <PreviewFrame chatStyles={chatStyles} />
      </Paper>
    </section>
  )
}

export default Preview
