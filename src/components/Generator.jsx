import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import Form from '../containers/Form';
import Preview from '../containers/Preview';

export default class Generator extends Component {
  interval = null;

  textFieldRef = React.createRef();

  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    createStyleSheet: PropTypes.func.isRequired,
    styleSheet: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { createStyleSheet } = this.props;

    createStyleSheet();
    this.interval = setInterval(() => {
      createStyleSheet();
    }, 500);
  }

  shouldComponentUpdate(nextProps) {
    const { styleSheet } = this.props;

    return styleSheet !== nextProps.styleSheet;
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  handleFocus = () => {
    const { current: textField } = this.textFieldRef;

    textField.select();
  }

  render() {
    const { classes, styleSheet } = this.props;

    return (
      <Fragment>
        <Grid className={classes.root} component="main" container>
          <Grid className={classes.form} item sm={6} xs={12}>
            <Form />
          </Grid>
          <Grid className={classes.preview} item sm={6} xs={12}>
            <Preview styleSheet={styleSheet} />
          </Grid>
        </Grid>
        <TextField
          className={classes.result}
          fullWidth
          inputRef={this.textFieldRef}
          multiline
          onFocus={this.handleFocus}
          props={{
            InputProps: {
              readOnly: true,
            },
          }}
          rows={20}
          value={styleSheet}
        />
      </Fragment>
    );
  }
}
