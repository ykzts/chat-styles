// @flow

import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Form from '../containers/Form';
import Preview from '../containers/Preview';
import Result from '../containers/Result';
import previewPath from '../files/preview.html';

const Main = styled.main`
  margin: 50px 50px 25px;
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 50px;
`;

const Separator = styled.hr`
  border-top: 1px solid #333;
`;

type Props = {
  fetchChatStyles: () => void,
  fetchPreviewInvert: () => void,
  isLoading: boolean,
};

export default class Generator extends React.Component<Props> {
  componentDidMount() {
    const { fetchChatStyles, fetchPreviewInvert } = this.props;

    fetchChatStyles();
    fetchPreviewInvert();
  }

  shouldComponentUpdate(nextProps: Props) {
    const { isLoading } = this.props;

    return isLoading !== nextProps.isLoading;
  }

  render() {
    const { isLoading } = this.props;

    return (
      <>
        <Helmet>
          <link as="document" href={previewPath} type="text/html" />
        </Helmet>
        <Main>
          {isLoading && (
            <>
              <Container>
                <Form />
                <Preview />
              </Container>
              <Separator />
            </>
          )}
          <Result />
        </Main>
      </>
    );
  }
}
