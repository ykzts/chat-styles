import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import Form from '../containers/Form';
import Preview from '../containers/Preview';

// eslint-disable-next-line react/prefer-stateless-function
export default class Generator extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid className={classes.root} component="main" container>
          <Grid className={classes.form} item sm={6} xs={12}>
            <Form />
          </Grid>
          <Grid className={classes.preview} item sm={6} xs={12}>
            <Preview />
          </Grid>
        </Grid>
        <TextField className={classes.result} multiline rows={30} />
      </Fragment>
    );
  }
}
