import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { SketchPicker } from 'react-color';
import colorShape from '../types/colorShape';
import { css as bg } from '../utils/colors';

export default class ColorPicker extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    color: colorShape.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    disabled: false,
  };

  state = {
    anchorEl: null,
  };

  handleChange = (color) => {
    const { onChange } = this.props;

    onChange(color);
  }

  handleClick = ({ currentTarget }) => {
    this.setState({ anchorEl: currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  shouldComponent(nextProps, nextState) {
    const { color } = this.props;
    const { anchorEl } = this.state;

    return anchorEl !== nextState.anchorEl
      || color !== nextProps.color;
  }

  render() {
    const { classes, color, disabled } = this.props;
    const { anchorEl } = this.state;

    return (
      <Fragment>
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
      </Fragment>
    );
  }
}
