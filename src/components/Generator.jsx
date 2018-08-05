import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Popover from '@material-ui/core/Popover';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { SketchPicker } from 'react-color';
import Preview from '../containers/Preview';

export default class Generator extends PureComponent {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  state = {
    anchorEl: null,
    avatarEnabled: true,
    avatarSize: 24,
    outlineColor: '#000',
    outlineSize: 2,
    showOutlines: true,
  };

  handleChangeAvatarEnabled = (event, checked) => {
    this.setState({ avatarEnabled: checked });
  }

  handleChangeAvatarSize = ({ target }) => {
    this.setState({ avatarSize: +target.value });
  }

  handleChangeOutlineColor = (color) => {
    this.setState({ outlineColor: color.hex });
  }

  handleChangeOutlineSize = ({ target }) => {
    this.setState({ outlineSize: +target.value });
  }

  handleChangeShowOutlines = (event, checked) => {
    this.setState({ showOutlines: checked });
  }

  handleClick = ({ currentTarget }) => {
    this.setState({ anchorEl: currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes } = this.props;
    const {
      anchorEl,
      avatarEnabled,
      avatarSize,
      outlineColor,
      outlineSize,
      showOutlines,
    } = this.state;

    return (
      <Grid className={classes.root} component="main" container>
        <Grid className={classes.form} item sm={6} xs={12}>
          <Grid container>
            <Grid item sm={6} xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  フォント
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={(
                      <Switch checked={showOutlines} color="primary" onChange={this.handleChangeShowOutlines} />
                    )}
                    label="アウトラインを表示する"
                  />
                </FormGroup>
                <FormControl>
                  <InputLabel htmlFor="outline-size">
                    太さ
                  </InputLabel>
                  <Input
                    disabled={!showOutlines}
                    endAdornment={(
                      <InputAdornment position="end">
                        px
                      </InputAdornment>
                    )}
                    id="outline-size"
                    onChange={this.handleChangeOutlineSize}
                    type="number"
                    value={outlineSize}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>
                    色
                  </FormLabel>
                  <Button onClick={this.handleClick} variant="contained">
                    <div
                      className={classes.colorPalette}
                      style={{ backgroundColor: outlineColor }}
                    />
                  </Button>
                  <Popover anchorEl={anchorEl} onClose={this.handleClose} open={!!anchorEl}>
                    <SketchPicker color={outlineColor} onChange={this.handleChangeOutlineColor} />
                  </Popover>
                </FormControl>
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  アイコン
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={(
                      <Switch checked={avatarEnabled} color="primary" onChange={this.handleChangeAvatarEnabled} />
                    )}
                    label="表示する"
                  />
                </FormGroup>
                <FormControl>
                  <InputLabel htmlFor="avatar-size">
                    大きさ
                  </InputLabel>
                  <Input
                    disabled={!avatarEnabled}
                    endAdornment={(
                      <InputAdornment position="end">
                        px
                      </InputAdornment>
                    )}
                    id="avatar-size"
                    onChange={this.handleChangeAvatarSize}
                    type="number"
                    value={avatarSize}
                  />
                </FormControl>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.preview} item xs={12} sm={6}>
          <Preview />
        </Grid>
      </Grid>
    );
  }
}
