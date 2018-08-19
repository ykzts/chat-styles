// @flow

import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Preview from '../containers/Preview';
import Result from '../containers/Result';
import previewPath from '../files/preview.html';
import LazyLoader from './LazyLoader';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  padding-top: 16px;
`;

type Props = {
  fetchChatStyles: () => void,
  hasChatStyles: boolean,
};

export default class Generator extends React.Component<Props> {
  componentDidMount() {
    const { fetchChatStyles } = this.props;

    fetchChatStyles();
  }

  shouldComponentUpdate(nextProps: Props) {
    const { hasChatStyles } = this.props;

    return hasChatStyles !== nextProps.hasChatStyles;
  }

  render() {
    const { hasChatStyles } = this.props;

    return (
      <main>
        <Helmet>
          <link as="document" href={previewPath} type="text/html" />
        </Helmet>
        {hasChatStyles && (
          <Container>
            <LazyLoader
              fetchComponent={() => import(/* webpackChunkName: "form" */ '../containers/Form')}
            />
            <Preview />
          </Container>
        )}
        <Result />
      </main>
    );
  }
}
