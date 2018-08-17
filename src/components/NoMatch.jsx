// @flow

import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Headline = styled(Typography)`
  margin: 24px 24px 8px 64px;
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
          <Headline variant="headline">
            {title}
          </Headline>
        </main>
      </>
    );
  }
}
