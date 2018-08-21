// @flow

import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Title = styled.h2`
  color: #666;
  font-size: 2rem;
  font-weight: bold;
  margin: 24px 24px 32px 64px;
`;

type Props = {
  title?: string,
};

export default class NoMatch extends React.Component<Props> {
  static defaultProps = {
    title: '404 Not Found',
  };

  shouldComponentUpdate(nextProps: Props) {
    const { title } = this.props;

    return title !== nextProps.title;
  }

  render() {
    const { title } = this.props;

    return (
      <>
        <Helmet>
          <title>
            {title}
          </title>
        </Helmet>
        <main>
          <Title>
            {title}
          </Title>
        </main>
      </>
    );
  }
}
