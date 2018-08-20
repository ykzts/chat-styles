// @flow

import * as React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import Generator from '../containers/Generator';
import configureStore from '../store/configureStore';
import NoMatch from './NoMatch';

const store = configureStore();

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }
`;

const Header = styled.header`
  align-items: center;
  background-color: #ffc107;
  display: flex;
  min-height: 50px;
  padding: 0 50px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 24px 16px 32px;

  p {
    margin: 0;
    text-align: right;
  }

  a {
    color: #aaa;
    text-decoration: none;
  }
`;

type Props = {
  title: string,
};

export default ({ title }: Props) => (
  <Provider store={store}>
    <>
      <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`} />
      <Header>
        <Title>
          <Link to="/">
            {title}
          </Link>
        </Title>
      </Header>
      <Switch>
        <Route component={Generator} exact path="/" />
        <Route component={NoMatch} />
      </Switch>
      <Footer>
        <p>
          Inspired by
          &#8203;
          <a href="https://chatv2.septapus.com/" rel="noopener noreferrer" target="_blank">
            Chat v2.0 Style Generator
          </a>
        </p>
        <p>
          Created by
          &#8203;
          <a href="https://ykzts.com/" rel="noopener noreferrer" target="_blank">
            Yamagishi Kazutoshi
          </a>
        </p>
        <p>
          Desined by
          &#8203;
          <a href="https://mastodos.com/@7_nana" rel="noopener noreferrer" target="_blank">
            @7_nana
          </a>
        </p>
        <p>
          <a href="https://github.com/ykzts/chat-styles" rel="noopener noreferrer" target="_blank">
            Source code
          </a>
        </p>
      </Footer>
    </>
  </Provider>
);
