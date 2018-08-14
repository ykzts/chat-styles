// @flow

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { Field } from 'redux-form';
import type { FieldProps } from 'redux-form';
import ColorPicker from '../containers/ColorPicker';
import { hex2rgb } from '../utils/colors';

type Props = {
  change: (string, any) => void,
  classes: Object,
  saveChatStyles: () => void,
  showAuthorName: boolean,
  showAvatar: boolean,
  showBadge: boolean,
  showOutline: boolean,
  showTimestamp: boolean,
};

type ExtendedFieldProps = {
  disabled?: boolean,
  label?: string,
} & FieldProps;

const renderSwitch = (fieldProps: ExtendedFieldProps): React.Element<*> => {
  const { disabled, input, label } = fieldProps;

  return (
    <FormControlLabel
      control={(
        <Switch checked={!!input.value} color="primary" onChange={input.onChange} />
      )}
      disabled={disabled}
      label={label}
    />
  );
};

export default class Form extends React.Component<Props> {
  interval: ?IntervalID = null;

  static defaultProps = {
    showAuthorName: true,
    showAvatar: true,
    showBadge: true,
    showOutline: true,
    showTimestamp: false,
  };

  componentDidMount() {
    const { saveChatStyles } = this.props;

    this.interval = setInterval(() => {
      saveChatStyles();
    }, 1000);
  }

  shouldComponentUpdate(nextProps: Props) {
    const {
      showAuthorName,
      showAvatar,
      showBadge,
      showOutline,
      showTimestamp,
    } = this.props;

    return showAuthorName !== nextProps.showAuthorName
      || showBadge !== nextProps.showBadge
      || showAvatar !== nextProps.showAvatar
      || showOutline !== nextProps.showOutline
      || showTimestamp !== nextProps.showTimestamp;
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  renderColorPicker = (fieldProps: ExtendedFieldProps): React.Element<*> => {
    const { change } = this.props;
    const { disabled, input } = fieldProps;

    return (
      <ColorPicker
        color={input.value || hex2rgb('#ffffff')}
        disabled={disabled}
        onChange={color => change(input.name, color)}
      />
    );
  }

  renderTextField = (fieldProps: ExtendedFieldProps): React.Element<*> => {
    const { classes } = this.props;
    const {
      input,
      label,
      meta,
      ...custom
    } = fieldProps;

    return (
      <TextField
        className={classes.textField}
        helperText={meta.error}
        label={label}
        error={meta.touched && !!meta.error}
        {...input}
        {...custom}
      />
    );
  }

  render() {
    const {
      classes,
      showAuthorName,
      showAvatar,
      showBadge,
      showOutline,
      showTimestamp,
    } = this.props;

    return (
      <Grid container direction="column">
        <Grid container item>
          <Grid className={classes.box} item sm={4} xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                名前
              </FormLabel>
              <Field
                component={renderSwitch}
                label="表示する"
                name="showAuthorName"
              />
              <Grid alignItems="flex-end" container justify="space-between" spacing={8}>
                <Grid item xs={8}>
                  <Field
                    component={this.renderTextField}
                    disabled={!showAuthorName}
                    label="大きさ"
                    margin="normal"
                    name="authorNameSize"
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
                        min: 8,
                      },
                    }}
                    type="number"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    component={this.renderColorPicker}
                    disabled={!showAuthorName}
                    name="authorNameColor"
                  />
                </Grid>
              </Grid>
              <FormControlLabel
                control={(
                  <Field
                    component={this.renderColorPicker}
                    disabled={!showAuthorName}
                    name="ownerAuthorNameColor"
                  />
                )}
                label="オーナー"
              />
              <FormControlLabel
                control={(
                  <Field
                    component={this.renderColorPicker}
                    disabled={!showAuthorName}
                    name="moderatorAuthorNameColor"
                  />
                )}
                label="モデレーター"
              />
              <FormControlLabel
                control={(
                  <Field
                    component={this.renderColorPicker}
                    disabled={!showAuthorName}
                    name="memberAuthorNameColor"
                  />
                )}
                label="メンバー"
              />
            </FormControl>
          </Grid>
          <Grid className={classes.box} item sm={4} xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                メッセージ
              </FormLabel>
              <Grid alignItems="flex-end" container justify="space-between" spacing={8}>
                <Grid item xs={8}>
                  <Field
                    component={this.renderTextField}
                    disabled={!showAuthorName}
                    label="大きさ"
                    margin="normal"
                    name="messageSize"
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
                        min: 8,
                      },
                    }}
                    type="number"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    component={this.renderColorPicker}
                    disabled={!showAuthorName}
                    name="messageColor"
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item justify="flex-start" spacing={0}>
          <Grid className={classes.box} item sm={4} xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                アウトライン
              </FormLabel>
              <Field
                component={renderSwitch}
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
                component={renderSwitch}
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
                バッジ
              </FormLabel>
              <Field
                component={renderSwitch}
                label="表示する"
                name="showBadge"
              />
              <Field
                component={renderSwitch}
                disabled={!showBadge}
                label="モデレーター"
                name="showModeratorBadge"
              />
              <Field
                component={renderSwitch}
                disabled={!showBadge}
                label="メンバー"
                name="showMemberBadge"
              />
            </FormControl>
          </Grid>
          <Grid className={classes.box} item sm={4} xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                タイムスタンプ
              </FormLabel>
              <Field
                component={renderSwitch}
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
                        min: 8,
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
          <Grid className={classes.box} item sm={4} xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                その他
              </FormLabel>
              <Field
                component={renderSwitch}
                label="スーパーチャットの背景を表示する"
                name="showSuperChatBackground"
              />
              <Field
                component={renderSwitch}
                label="メンバー登録アナウンスの背景を表示する"
                name="showNewMemberBackground"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
