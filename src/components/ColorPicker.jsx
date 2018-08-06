import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { SketchPicker } from 'react-color';

const colorShape = PropTypes.shape({
  rgb: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
    g: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired,
  }).isRequired,
});

export default class ColorPicker extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.any).isRequired,
    color: colorShape.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    onChange: null,
  };

  state = {
    anchorEl: null,
  };

  handleChange = (color) => {
    const { onChange } = this.props;
    if (typeof onChange === 'function') {
      const { rgb } = color;
      onChange({ rgb });
    }
  }

  handleClick = ({ currentTarget }) => {
    this.setState({ anchorEl: currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  shouldComponent(nextProps, nextState) {
    const { anchorEl } = this.state;
    if (anchorEl !== nextState.anchorEl) {
      return true;
    }
    const { color } = this.props;
    return color.rgb.r !== nextProps.color.rgb.r
      || color.rgb.g !== nextProps.color.rgb.g
      || color.rgb.b !== nextProps.color.rgb.b
      || color.rgb.a !== nextProps.color.rgb.a;
  }

  render() {
    const {
      classes,
      color,
      disabled,
    } = this.props;
    const { anchorEl } = this.state;

    const backgroundColor = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;

    return (
      <Fragment>
        <Button className={classes.button} disabled={disabled} onClick={this.handleClick} size="small" variant="contained">
          <div className={classes.colorPalette} style={{ backgroundColor }} />
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
