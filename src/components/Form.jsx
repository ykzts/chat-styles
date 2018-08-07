import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Field } from 'redux-form';
import ColorPicker from '../containers/ColorPicker';

export default class Form extends Component {
  static propTypes = {
    change: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    showAvatar: PropTypes.bool,
    showOutline: PropTypes.bool,
    showTimestamp: PropTypes.bool,
  };

  static defaultProps = {
    showAvatar: true,
    showOutline: true,
    showTimestamp: false,
  };

  shouldComponentUpdate(nextProps) {
    const { showAvatar, showOutline, showTimestamp } = this.props;

    return showAvatar !== nextProps.showAvatar
      || showOutline !== nextProps.showOutline
      || showTimestamp !== nextProps.showTimestamp;
  }

  renderColorPicker = ({ disabled, input }) => {
    const { change } = this.props;
    return (
      <ColorPicker
        color={input.value}
        disabled={disabled}
        onChange={color => change(input.name, color)}
      />
    );
  }

  // eslint-disable-next-line class-methods-use-this
  renderSwitch({ input, label }) {
    return (
      <FormGroup>
        <FormControlLabel
          control={(
            <Switch checked={!!input.value} color="primary" onChange={input.onChange} />
          )}
          label={label}
        />
      </FormGroup>
    );
  }

  renderTextField = ({
    input,
    label,
    meta: { error, touched },
    ...custom
  }) => {
    const { classes } = this.props;
    return (
      <TextField
        className={classes.textField}
        helperText={error}
        label={label}
        error={touched && !!error}
        {...input}
        {...custom}
      />
    );
  }

  render() {
    const {
      classes,
      showAvatar,
      showOutline,
      showTimestamp,
    } = this.props;

    return (
      <Grid container justify="flex-start" spacing={0}>
        <Grid className={classes.box} item sm={4} xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              アウトライン
            </FormLabel>
            <Field
              component={this.renderSwitch}
              label="表示する"
              name="showOutline"
            />
            <Grid alignItems="flex-end" container justify="space-between" spacing={8}>
              <Grid item xs={8}>
                <Field
                  component={this.renderTextField}
                  disabled={!showOutline}
                  label="太さ"
                  margin="normal"
                  name="outlineSize"
                  props={{
                    InputProps: {
                      endAdornment: (
                        <InputAdornment position="end">
                          px
                        </InputAdornment>
                      ),
                    },
                    inputProps: {
                      max: 5,
                      min: 1,
                    },
                  }}
                  type="number"
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  component={this.renderColorPicker}
                  disabled={!showOutline}
                  label="色"
                  name="outlineColor"
                />
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
        <Grid className={classes.box} item sm={4} xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              アイコン
            </FormLabel>
            <Field
              component={this.renderSwitch}
              label="表示する"
              name="showAvatar"
            />
            <Field
              component={this.renderTextField}
              disabled={!showAvatar}
              label="大きさ"
              margin="normal"
              name="avatarSize"
              props={{
                InputProps: {
                  endAdornment: (
                    <InputAdornment position="end">
                      px
                    </InputAdornment>
                  ),
                },
                inputProps: {
                  max: 256,
                  min: 1,
                },
              }}
              type="number"
            />
          </FormControl>
        </Grid>
        <Grid className={classes.box} item sm={4} xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              タイムスタンプ
            </FormLabel>
            <Field
              component={this.renderSwitch}
              label="表示する"
              name="showTimestamp"
            />
            <Grid alignItems="flex-end" container justify="space-between" spacing={8}>
              <Grid item xs={8}>
                <Field
                  component={this.renderTextField}
                  disabled={!showTimestamp}
                  label="大きさ"
                  margin="normal"
                  name="timestampSize"
                  props={{
                    InputProps: {
                      endAdornment: (
                        <InputAdornment position="end">
                          px
                        </InputAdornment>
                      ),
                    },
                    inputProps: {
                      max: 50,
                      min: 1,
                    },
                  }}
                  type="number"
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  component={this.renderColorPicker}
                  disabled={!showTimestamp}
                  label="色"
                  name="timestampColor"
                />
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}
