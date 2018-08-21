// @flow

import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
  align-items: center;
  color: #666;
  display: inline-flex;
  font-size: 0.825rem;
`;

const Label = styled.span`
  display: block;
  margin-right: 20px;
`;

const Field = styled(({ disabled, focus, ...props }) => <div {...props} />)`
  border-bottom-color: ${({ focus }) => (focus ? '#333' : '#ddd')};
  border-bottom-style: ${({ disabled }) => (disabled ? 'dotted' : 'solid')};
  border-bottom-width: 2px;
  display: block;

  span {
    margin-left: 0.25rem;
    padding-right: 0.5rem;
  }
`;

const Input = styled.input`
  color: ${({ disabled }) => (disabled ? '#999' : 'inherit')};
  background-color: transparent;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  padding: 3px 0 3px 0.5rem;
  width: 5rem;

  &:focus {
    outline: 0;
  }
`;

type Props = {
  disabled?: boolean,
  label?: string,
  onChange: (event: SyntheticEvent<*>) => void,
  type?: string,
  value?: string,
};

type State = {
  focus: boolean,
};

export default class TextField extends React.Component<Props, State> {
  static defaultProps = {
    disabled: false,
    label: '',
    type: 'text',
    value: '',
  };

  state = {
    focus: false,
  };

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const {
      disabled,
      label,
      type,
      value,
    } = this.props;
    const { focus } = this.state;

    return focus !== nextState.focus
      || value !== nextProps.value
      || disabled !== nextProps.disabled
      || label !== nextProps.label
      || type !== nextProps.type;
  }

  handleBlur = () => {
    this.setState({ focus: false });
  }

  handleChange = (event: SyntheticEvent<*>) => {
    const { onChange } = this.props;

    if (typeof onChange === 'function') {
      onChange(event);
    }
  }

  handleFocus = () => {
    this.setState({ focus: true });
  }

  render() {
    const {
      disabled,
      label,
      type,
      value,
    } = this.props;
    const { focus } = this.state;

    return (
      <Wrapper>
        {label && (
          <Label>
            {label}
          </Label>
        )}
        <Field disabled={disabled} focus={focus}>
          <Input
            defaultValue={value}
            disabled={disabled}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            type={type}
          />
          <span>px</span>
        </Field>
      </Wrapper>
    );
  }
}
