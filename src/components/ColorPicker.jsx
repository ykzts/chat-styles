// @flow

import * as React from 'react';
import { SketchPicker } from 'react-color';
import type { ColorResult } from 'react-color';
import styled from 'styled-components';
import { css as bg } from '../utils/colors';

const Wrapper = styled.label`
  align-items: center;
  color: #666;
  display: inline-flex;
`;

const Label = styled.span`
  display: block;
  font-size: 0.825rem;
  margin-right: 20px;
`;

const Button = styled.button`
  background-color: #eee;
  border: 0;
  border-radius: 4px;
  box-shadow:
    0 1px 5px 0 rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  display: inline-block;
  padding: 5px;

  &:focus {
    outline: 0;
  }

  &:disabled {
    box-shadow: none;
  }
`;

const ColorPalette = styled(({ color, ...props }) => <div {...props} />)`
  background-color: ${({ color }) => bg(color.rgb)};
  border-radius: 4px;
  height: 20px;
  min-width: 36px;
  width: 100%;
`;

const Popover = styled(({ open, ...props }) => <div {...props} />)`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  z-index: 2;
`;

const Backdrop = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

type Props = {
  color: ColorResult,
  disabled?: boolean,
  label?: string,
  onChange: (color: ColorResult) => void,
};

type State = {
  open: boolean,
};

export default class ColorPicker extends React.Component<Props, State> {
  static defaultProps = {
    disabled: false,
    label: '',
  };

  state = {
    open: false,
  };

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { color, disabled } = this.props;
    const { open } = this.state;

    return open !== nextState.open
      || bg(color.rgb) !== bg(nextProps.color.rgb)
      || disabled !== nextProps.disabled;
  }

  handleChange = (color: ColorResult) => {
    const { onChange } = this.props;

    onChange(color);
  }

  handleClick = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { color, disabled, label } = this.props;
    const { open } = this.state;

    return (
      <>
        <Wrapper>
          {label && (
            <Label>
              {label}
            </Label>
          )}
          <Button disabled={disabled} onClick={this.handleClick}>
            <ColorPalette color={color} />
          </Button>
        </Wrapper>
        <Popover open={open}>
          <Backdrop onClick={this.handleClose} role="presentation" />
          <SketchPicker color={color.rgb} onChange={this.handleChange} />
        </Popover>
      </>
    );
  }
}
