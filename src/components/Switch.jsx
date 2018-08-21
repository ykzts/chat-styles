// @flow

import * as React from 'react';
import Toggle from 'react-toggle';
import toggleStyle from 'react-toggle/style.css';
import styled from 'styled-components';

const Root = styled.label`
  align-items: center;
  color: #666;
  display: inline-flex;
  font-size: 0.825rem;

  span {
    display: block;
    margin-right: 20px;
  }
`;

type Props = {
  checked?: boolean,
  disabled?: boolean,
  label?: string,
};

export default class Switch extends React.Component<Props> {
  static defaultProps = {
    checked: true,
    disabled: false,
    label: '',
  }

  componentDidMount() {
    toggleStyle.use();
  }

  shouldComponentUpdate(nextProps: Props) {
    const { checked, disabled, label } = this.props;

    return checked !== nextProps.checked
      || disabled !== nextProps.disabled
      || label !== nextProps.label;
  }

  componentWillUnmount() {
    toggleStyle.unuse();
  }

  render() {
    const { checked, label, ...props } = this.props;

    return (
      <Root>
        {label && (
          <span>
            {label}
          </span>
        )}
        <Toggle checked={checked} {...props} />
      </Root>
    );
  }
}
