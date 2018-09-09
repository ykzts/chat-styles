// @flow

import * as React from 'react';
import styled from 'styled-components';
import Form from '../containers/Form';
import Preview from '../containers/Preview';
import Result from '../containers/Result';

const Main = styled.main`
  margin: 25px 0;

  @media (min-width: 960px) {
    margin-top: 50px;
  }

  @media (min-width: 1280px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const Separator = styled.hr`
  border-top: 1px solid #333;
`;

const Placeholder = styled.div`
  height: 50vh;
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
      <Main>
        {!isLoading ? (
           <>
             <Container>
               <Form />
               <Preview />
             </Container>
             <Separator />
             <Result />
          </>
        ) : (
          <Placeholder role="presentation" />
        )}
      </Main>
    );
  }
}
