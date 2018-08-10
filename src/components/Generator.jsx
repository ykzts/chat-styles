import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Form from '../containers/Form';
import Preview from '../containers/Preview';

export default class Generator extends Component {
  textFieldRef = React.createRef();

  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    fetchChatStyles: PropTypes.func.isRequired,
    hasChatStyles: PropTypes.bool.isRequired,
    styleSheet: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { fetchChatStyles } = this.props;

    fetchChatStyles();
  }

  shouldComponentUpdate(nextProps) {
    const { hasChatStyles, styleSheet } = this.props;

    return styleSheet !== nextProps.styleSheet
      || hasChatStyles !== nextProps.hasChatStyles;
  }

  handleFocus = () => {
    const { current: textField } = this.textFieldRef;

    textField.select();
  }

  render() {
    const { classes, hasChatStyles, styleSheet } = this.props;

    return (
      <main>
        {hasChatStyles && (
          <Grid className={classes.root} container>
            <Grid className={classes.form} item sm={6} xs={12}>
              <Form />
            </Grid>
            <Grid className={classes.preview} item sm={6} xs={12}>
              <Preview />
            </Grid>
          </Grid>
        )}
        <TextField
          className={classes.result}
          fullWidth
          inputRef={this.textFieldRef}
          multiline
          onFocus={this.handleFocus}
          InputProps={{
            readOnly: true,
          }}
          rows={20}
          value={styleSheet}
        />
      </main>
    );
  }
}
