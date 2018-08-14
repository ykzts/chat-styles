// @flow

import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import * as React from 'react';
import { SketchPicker } from 'react-color';
import type { ColorResult } from 'react-color';
import { css as bg } from '../utils/colors';

type Props = {
  classes: Object,
  color: ColorResult,
  disabled?: boolean,
  onChange: (color: ColorResult) => void,
};

type State = {
  anchorEl: ?HTMLElement,
};

export default class ColorPicker extends React.Component<Props, State> {
  static defaultProps = {
    disabled: false,
  };

  state = {
    anchorEl: null,
  };

  handleChange = (color: ColorResult) => {
    const { onChange } = this.props;

    onChange(color);
  }

  handleClick = (event: SyntheticEvent<*>) => {
    const { currentTarget } = event;

    this.setState({ anchorEl: currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  shouldComponent(nextProps: Props, nextState: State) {
    const { color } = this.props;
    const { anchorEl } = this.state;

    return anchorEl !== nextState.anchorEl
      || color !== nextProps.color;
  }

  render() {
    const { classes, color, disabled } = this.props;
    const { anchorEl } = this.state;

    return (
      <>
        <Button className={classes.button} disabled={disabled} onClick={this.handleClick} size="small" variant="contained">
          <div className={classes.colorPalette} style={{ backgroundColor: bg(color) }} />
        </Button>
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom',
          }}
          onClose={this.handleClose}
          open={!!anchorEl}
          transformOrigin={{
            horizontal: 'center',
            vertical: 'top',
          }}
        >
          <SketchPicker color={color.rgb} onChange={this.handleChange} />
        </Popover>
      </>
    );
  }
}
