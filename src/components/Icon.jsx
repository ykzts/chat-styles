// @flow

import * as React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: inline-block;
  fill: currentColor;
  vertical-align: middle;
`;

type Props = {
  height?: number,
  name: string,
  width?: number,
};

export default class Icon extends React.Component<Props> {
  static defaultProps = {
    height: 24,
    width: 24,
  };

  shouldComponentUpdate(nextProps: Props) {
    const { name } = this.props;

    return name !== nextProps.name;
  }

  render() {
    const { height, name, width } = this.props;

    return (
      <Svg height={height} width={width}>
        <use xlinkHref={`#${name}`} />
      </Svg>
    );
  }
}
